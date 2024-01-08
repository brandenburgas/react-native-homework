const locale = navigator.language ? navigator.language : "en-EU";

export const formatAmount = (amount, currency) => {
  return Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency ? currency : "EUR",
  }).format(amount);
};
