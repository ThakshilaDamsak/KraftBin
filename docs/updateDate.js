// Check if the elements already exist
const kraftbinTimePassedElement = document.getElementById("kraftbin-relative-time");
const kraftbinDateElement = document.getElementById("kraftbin-absolute-time");

if (kraftbinTimePassedElement && kraftbinDateElement) {
  // Get the current date
  const currentDate = new Date();

  // Get the last modified date of the page
  const lastModifiedDate = new Date(document.lastModified);

  // Format the date as "yyyy.MM.dd at hh:mm a" (using user's time zone)
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedDate = lastModifiedDate.toLocaleString(undefined, options);

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - lastModifiedDate;

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;

  // Calculate the relative time based on the time difference
  let kraftbinRelativeTime;
  if (timeDifference < minute) {
    kraftbinRelativeTime = "just now.";
  } else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute);
    kraftbinRelativeTime = `${minutes} minute${minutes > 1 ? "s" : ""} ago.`;
  } else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour);
    kraftbinRelativeTime = `${hours} hour${hours > 1 ? "s" : ""} ago.`;
  } else if (timeDifference < week) {
    const days = Math.floor(timeDifference / day);
    kraftbinRelativeTime = `${days} day${days > 1 ? "s" : ""} ago.`;
  } else if (timeDifference < month) {
    const weeks = Math.floor(timeDifference / week);
    kraftbinRelativeTime = `${weeks} week${weeks > 1 ? "s" : ""} ago.`;
  } else {
    const months = Math.floor(timeDifference / month);
    kraftbinRelativeTime = `${months} month${months > 1 ? "s" : ""} ago.`;
  }

  // Update the content of the <span> elements
  kraftbinTimePassedElement.textContent = kraftbinRelativeTime;
  kraftbinDateElement.textContent = formattedDate;
};
