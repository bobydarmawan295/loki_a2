var li_items = document.querySelectorAll(".sidebar .arrow-inner");
var hamburger = document.querySelector(".hamburger");
var sidemenu = document.querySelector(".side-menu");

li_items.forEach((li_item) => {
  li_item.addEventListener("click", () => {
    if (sidemenu.classList.contains("click_collapse")) {
      return;
    } else {
      li_item.closest(".side-menu").classList.remove("hover_collapse");
    }
  });
});

li_items.forEach((li_item) => {
  li_item.addEventListener("mouseleave", () => {
    if (sidemenu.classList.contains("click_collapse")) {
      return;
    } else {
      li_item.closest(".side-menu").classList.add("hover_collapse");
    }
  });
});

hamburger.addEventListener("click", () => {
  hamburger.closest(".wrapper").classList.toggle("click_collapse");
  hamburger.closest(".wrapper").classList.toggle("hover_collapse");
});
