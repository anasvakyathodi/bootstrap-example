const collapseEl = document.querySelector(".collapsible");
const togglerBtn = document.querySelector("#toggler");
const scrollerBtn = document.querySelector("#scroller-btn");

//togger button listener
togglerBtn.addEventListener("click", () => {
  collapseEl.classList.toggle("show");
});

// back to top scrolling listener
scrollerBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
