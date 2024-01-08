export const formatDate = (unformattedDate) => {
  const date = unformattedDate.toLocaleDateString().split("/");
  return `${date[2]} ${date[1]} ${date[0]}`;
};

export const durationCalculation = (startDate, duration) => {
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + duration);
  return `${startDate.split("-").join(" ")} - ${formatDate(endDate)}`;
};
