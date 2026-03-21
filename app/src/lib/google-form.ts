/**
 * Google Form embed URL (docs.google.com … /viewform?embedded=true).
 * Override via NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL if the form is replaced.
 */
export const GOOGLE_FORM_EMBED_URL =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL ??
  "https://docs.google.com/forms/d/e/1FAIpQLScR81coMyU1DeG5TWNWOctqJBklt4uQCoQA78HsHOOtHWC4Yg/viewform?embedded=true";

/** Short link for “open in new tab” fallback */
export const GOOGLE_FORM_SHORT_URL = "https://forms.gle/MsTwhweQYQKds57x6";
