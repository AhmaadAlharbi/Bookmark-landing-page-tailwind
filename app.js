const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const question = document.querySelectorAll(".question");
const mobileNav = document.getElementById("mobile-nav");
const mobileDiv = document.getElementById("mobile-div");

mobileNav.addEventListener("click", () => {
  mobileDiv.classList.toggle("hidden");
});
//toggle questions
question.forEach((q) =>
  q.addEventListener("click", (e) => {
    q.nextElementSibling.classList.toggle("hidden");
    q.children[1].classList.toggle("rotate-180");
  })
);
//remove border
function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("border-softRed");
  });
}

//remove visible item content
function hideContent() {
  tabContentItems.forEach((content) => {
    content.style.display = "none";
  });
}
//select tab
function selectItem() {
  removeBorder();
  hideContent();

  this.classList.add("border-softRed");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // add show class
  // tabContentItem.classList.remove("hidden");
  tabContentItem.style.display = "flex";
  tabContentItem.classList.toggle("border-softRed");
}
//listen for tab item
tabItems.forEach((item) => item.addEventListener("click", selectItem));
