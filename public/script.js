const notificationToggle = document.querySelector(".notification-toggle");
const notificationDot = document.querySelectorAll(".fa-circle-small");
const notificationItem = document.querySelectorAll(".notification-item");

notificationToggle.addEventListener("click", () => {
  notificationItem.forEach((item) => {
    notificationDot.forEach((dot) => {
      if (dot.classList.contains("hide")) {
      } else {
        dot.classList.add("hide");
      }

      if (item.classList.contains("bg-def")) {
      } else {
        item.classList.add("bg-def");
      }
    });
  });
});
