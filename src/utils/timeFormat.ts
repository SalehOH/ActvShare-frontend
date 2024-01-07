import moment from "moment";

export const timeFormat = (time: string) => {
  const localTime = moment.utc(time).local();
  const diffInHours = moment().diff(localTime, "hours");
  const diffInMinutes = moment().diff(localTime, "minutes");

  if (diffInHours >= 24) {
    return localTime.format("YYYY-MM-DD");
  } else if (diffInHours < 1) {
    return diffInMinutes + " minutes ago";
  } else {
    return diffInHours + ` hour${diffInHours === 1 ? "" : "s"} ago`;
  }
};