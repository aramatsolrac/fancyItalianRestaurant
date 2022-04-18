"use strict";
// const spicyIcon = "./../assets/spicy.svg";

import spicyIcon from "../../assets/spicy.svg";

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
export function populateMenu(
  menuName,
  elementName,
  name,
  description,
  price,
  menuOrder,
  itemType,
  spicy
) {
  if (itemType === menuName) {
    const div = createElement("div", "menu-item");
    console.log({ spicy });
    div.innerHTML = `
      <h3>${name}</h3> 
      <img class="spicy-icon" width="30" src="${spicy ? spicyIcon : ""}" >
      <p>${description}</p>
      <p>${formatNumber(price)}</p>
      <p>${menuOrder}</p>

    `;
    elementName.appendChild(div);
  }
}
