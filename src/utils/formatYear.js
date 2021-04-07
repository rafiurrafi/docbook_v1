const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};
function formatYear(currentYear) {
  const year = currentYear.getFullYear();
  const month = months[currentYear.getMonth()];
  const date = currentYear.getDate();
  return date.toString() + " " + month + ", " + year.toString();
}
export function formatBookingDate(bookingYear) {
  const arr = bookingYear.split("-");
  const month = parseInt(arr[1] - 1);
  return arr[2] + " " + months[month] + ", " + arr[0];
}
export default formatYear;
