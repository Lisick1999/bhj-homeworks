const tab = document.querySelectorAll(".tab");
const tabsContainer = document.querySelector(".tab__navigation");
const tabContent = document.querySelectorAll(".tab__content");

function tabClick(event) {
  const clickedTab = event.target.closest(".tab");

   if (!clickedTab) {
    return;
  }

  if (clickedTab.classList.contains("tab_active")) {
    return;
  }

   tab.forEach((tabItem) => {
    tabItem.classList.remove("tab_active");
  });

  clickedTab.classList.add("tab_active");

  const index = Array.from(tab).indexOf(clickedTab);

  tabContent.forEach((contentItem) => {
    contentItem.classList.remove("tab__content_active");
  });

  tabContent[index].classList.add("tab__content_active");
}

tabsContainer.addEventListener("click", tabClick);