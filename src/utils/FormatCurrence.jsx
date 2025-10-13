/**
 * Formats a number as a currency string with a thousands separator.
 * @param {number} value The number to format.
 * @param {string} [locale='en-US'] The locale string to use for formatting.
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (value, locale = "en-US") => {
  if (typeof value !== "number") {
    return value;
  }

  // toLocaleString() provides language-sensitive number formatting
  return value.toLocaleString(locale);
};
