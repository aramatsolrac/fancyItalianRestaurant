import "./style/global.css";
import menu from "./menu";
import { renderItem, createElement } from "./utils/helper";

// *Populate menu using the menu data*
const starters = document.getElementById("starters");
const pasta = document.getElementById("pasta");
const pizza = document.getElementById("pizza");
const toggleSpicy = document.getElementById("toggle");

const menuItems = menu.items.sort((a, b) => a.menuOrder - b.menuOrder);

toggleSpicy.addEventListener("click", populateItemWithItems);

// Populate menu with menu items
function populateItemWithItems() {
  // clean menu items of each menu
  starters.textContent = "";
  pasta.textContent = "";
  pizza.textContent = "";

  populateItemCategory(starters, "starters");
  populateItemCategory(pasta, "pasta");
  populateItemCategory(pizza, "pizza");
}

populateItemWithItems();

// Populate menu with menu items
function populateItemCategory(categoryElement, category) {
  const spicyChecked = toggleSpicy.checked;
  let categoryItems = menuItems.filter((item) => item.type === category);

  if (spicyChecked) {
    categoryItems = categoryItems.filter((item) => item.spicy);
  }

  if (categoryItems.length > 0) {
    categoryItems.forEach((item) => {
      renderItem(
        categoryElement,
        item.name,
        item.description,
        item.price,
        item.spicy
      );
    });
  } else {
    const noItem = createElement("div");
    noItem.innerHTML = `
      <p class="menu__no-item">No spicy option available</p>
    `;
    categoryElement.appendChild(noItem);
  }
}

// *Slider*
const sliderImages = document.querySelectorAll(".hero__slide");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
let current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Start slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "flex";
}

// Show previous image
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "flex";
  current--;
}

// Show next image
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "flex";
  current++;
}

// Left arrow click event
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click event
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

// *Scroll to the top of the document*
const goToTop = document.getElementById("goToTop");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTop.style.display = "block";
  } else {
    goToTop.style.display = "none";
  }
}

// Scroll to the top of the document when the user clicks on the button
goToTop.onclick = function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
