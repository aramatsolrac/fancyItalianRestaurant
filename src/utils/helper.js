"use strict";

import spicyIcon from "../../assets/icons/spicy.svg";

// utility to change the number to currency format
export function formatNumber(number) {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

// utility to build DOM elements with classes and text content
export function createElement(element, className = null, text = null) {
  const newElement = document.createElement(element);
  if (text) newElement.textContent = text;
  if (className) newElement.classList.add(className);
  return newElement;
}

// utility to append DOM elements to the DOM
export function renderItem(categoryElement, name, description, price, spicy) {
  const div = createElement("div", "menu__item");
  div.innerHTML = `
      <div class="menu__name-and-price">
        <div class="menu__name">
          <h3>${name}</h3>
          <img class="menu__spicy" src="${spicy ? spicyIcon : ""}" >
        </div>
        <div>
          <p class="menu__price">${formatNumber(price)}</p>
        </div>
      </div>
      <p class="menu__sub-description">${description}</p>
    `;
  categoryElement.appendChild(div);
}
