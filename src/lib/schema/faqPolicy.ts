import type { FAQ } from '../../types';

interface FAQPolicyInput {
  faqs: FAQ[];
  pageTokens: string[];
  visible: boolean;
  usesSharedFallback: boolean;
  isFaqHub?: boolean;
}

const MIN_FAQ_COUNT = 2;

function hasText(value: string): boolean {
  return value.trim().length > 0;
}

function hasValidFaqContent(faq: FAQ): boolean {
  return hasText(faq.question) && hasText(faq.answer);
}

export function shouldEmitFaqSchema(input: FAQPolicyInput): boolean {
  const visibleFaqs = input.faqs.filter(hasValidFaqContent);

  if (input.isFaqHub) {
    return input.visible && visibleFaqs.length >= 1;
  }

  // Emit FAQ schema when FAQs are user-visible, sufficiently numerous,
  // and valid for both rendered FAQ UI and JSON-LD serialization.
  return input.visible && visibleFaqs.length >= MIN_FAQ_COUNT;
}
