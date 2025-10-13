/**
 * Formats a number as Nigerian Naira (NGN).
 * @param {number} value The number to format.
 * @returns {string} The formatted currency string, e.g., "₦1,250.00".
 */
export const formatNGN = (value) => {
  // Ensure the input is a number
  if (typeof value !== "number") {
    return value;
  }

  // Use Intl.NumberFormat for language-sensitive currency formatting
  // The 'en-NG' locale formats for English as used in Nigeria
  // The 'NGN' currency code specifies the Nigerian Naira
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(value);
};
