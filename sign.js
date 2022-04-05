const tabs = document.querySelectorAll("[data-tab-target]");
const tabcontents = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabcontents.forEach((tabcont) => {
      tabcont.classList.remove("active");
    });
    target.classList.add("active");
  });
});