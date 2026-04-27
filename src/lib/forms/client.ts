declare const grecaptcha: { getResponse: () => string; reset: () => void };
declare function gtag(...args: unknown[]): void;

export interface LeadFormOptions {
  formId: string;
  feedbackId: string;
  minSubmitMs?: number;
  endpoint?: string;
  thankYouPath?: string;
  requireOneOf?: Array<'email' | 'phone'>;
}

type FeedbackState = 'error' | 'success';

const getDigits = (value: string): string => value.replace(/\D+/g, '');

export function initLeadForm({
  formId,
  feedbackId,
  minSubmitMs = 3000,
  endpoint,
  thankYouPath = '/thank-you/',
  requireOneOf = [],
}: LeadFormOptions): void {
  const form = document.getElementById(formId) as HTMLFormElement | null;
  const feedback = document.getElementById(feedbackId) as HTMLParagraphElement | null;
  if (!form || !feedback) return;

  const timestampInput = form.querySelector('[name="_timestamp"]') as HTMLInputElement | null;
  const honeypotInput = form.querySelector('[name="honeypot"]') as HTMLInputElement | null;
  const phoneInput = form.querySelector('input[name="phone"]') as HTMLInputElement | null;
  const normalizedPhoneInput = form.querySelector(
    '[name="phone_digits"]'
  ) as HTMLInputElement | null;
  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
  const controls = Array.from(
    form.querySelectorAll<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLButtonElement
    >('input:not([type="hidden"]), select, textarea, button')
  );

  const defaultSubmitLabel = submitButton?.textContent ?? 'Submit';
  const loadingSubmitLabel = submitButton?.dataset.loadingLabel || 'Sending...';

  const showFeedback = (state: FeedbackState, message: string): void => {
    feedback.dataset.state = state;
    feedback.textContent = message;
    feedback.role = state === 'error' ? 'alert' : 'status';
  };

  const setFormSubmitting = (isSubmitting: boolean): void => {
    form.dataset.submitting = isSubmitting ? 'true' : 'false';
    controls.forEach((field) => {
      if (isSubmitting) {
        field.setAttribute('disabled', 'true');
      } else if (!field.hasAttribute('data-static-disabled')) {
        field.removeAttribute('disabled');
      }
    });

    if (submitButton) {
      submitButton.textContent = isSubmitting ? loadingSubmitLabel : defaultSubmitLabel;
    }
  };

  controls.forEach((field) => {
    if (field.hasAttribute('disabled')) {
      field.setAttribute('data-static-disabled', 'true');
    }
  });

  if (timestampInput) timestampInput.value = String(Date.now());

  phoneInput?.addEventListener('blur', () => {
    const digits = getDigits(phoneInput.value);
    if (normalizedPhoneInput) normalizedPhoneInput.value = digits;
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      showFeedback('error', 'Please complete all required fields before submitting.');
      return;
    }

    const elapsed = Date.now() - Number(timestampInput?.value || 0);
    if (elapsed < minSubmitMs) {
      showFeedback('error', 'Please wait a moment, then submit again.');
      return;
    }

    if (honeypotInput?.value) {
      showFeedback('error', 'We could not submit your request. Please refresh and try again.');
      return;
    }

    const token = grecaptcha.getResponse();
    if (!token) {
      showFeedback('error', 'Please complete the reCAPTCHA');
      return;
    }

    if (requireOneOf.length > 0) {
      const hasAnyRequired = requireOneOf.some((fieldName) => {
        const targetField = form.querySelector<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >(`[name="${fieldName}"]`);
        return !!targetField?.value?.trim();
      });
      if (!hasAnyRequired) {
        showFeedback('error', 'Please provide at least a phone number or an email address.');
        return;
      }
    }

    if (phoneInput) {
      const digits = getDigits(phoneInput.value);
      if (normalizedPhoneInput) normalizedPhoneInput.value = digits;
    }

    const formData = new FormData(form);
    formData.append('recaptchaToken', token);
    setFormSubmitting(true);
    showFeedback('success', loadingSubmitLabel);

    try {
      const response = await fetch(endpoint ?? '', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      const data = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;
      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || 'We could not send your request. Please try again.');
      }

      grecaptcha.reset();
      const navigate = () => window.location.assign(thankYouPath);
      if (typeof gtag === 'function') {
        gtag('event', 'form_submit', {
          event_category: 'lead',
          event_label: formId,
          event_callback: navigate,
          event_timeout: 2000,
        });
      } else {
        navigate();
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'We could not send your request. Please try again.';
      showFeedback('error', message);
      if (phoneInput && normalizedPhoneInput?.value) {
        phoneInput.value = normalizedPhoneInput.value;
      }
      setFormSubmitting(false);
    }
  });
}
