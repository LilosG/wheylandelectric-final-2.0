import type { FAQ } from '../../types';

interface FAQPolicyInput {
  faqs: FAQ[];
  pageTokens: string[];
  visible: boolean;
  usesSharedFallback: boolean;
  isFaqHub?: boolean;
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/\s+/g, ' ').trim();
}

function includesToken(question: string, tokens: string[]): boolean {
  const normalizedQuestion = normalize(question);
  return tokens.some((token) => normalizedQuestion.includes(normalize(token)));
}

export function shouldEmitFaqSchema(input: FAQPolicyInput): boolean {
  if (input.isFaqHub) {
    return input.visible && input.faqs.length >= 1;
  }

  if (!input.visible || input.usesSharedFallback || input.faqs.length < 3) {
    return false;
  }

  if (input.pageTokens.length === 0) {
    return false;
  }

  return input.faqs.every((faq) => includesToken(faq.question, input.pageTokens));
}
