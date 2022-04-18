import "./styles.css";
import menu from "./menu";
import formatNumber from "./utils/formatNumber";

const starters = document.getElementById("starters");
const pasta = document.getElementById("pasta");
const pizza = document.getElementById("pizza");
const menuItems = menu.items.sort((a, b) => a.menuOrder - b.menuOrder);
console.log(menuItems);

menuItems.forEach((item) => {
  if (item.type === "starters") {
    const starterDiv = document.createElement("div");
    starterDiv.classList.add("menu-item");
    starterDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p>${formatNumber(item.price)}</p>
      <p>${item.menuOrder}</p>
    `;
    starters.appendChild(starterDiv);
  } else if (item.type === "pasta") {
    const pastaDiv = document.createElement("div");
    pastaDiv.classList.add("menu-item");
    pastaDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p>${formatNumber(item.price)}</p>
      <p>${item.menuOrder}</p>

    `;
    pasta.appendChild(pastaDiv);
  } else if (item.type === "pizza") {
    const pizzaDiv = document.createElement("div");
    pizzaDiv.classList.add("menu-item");
    pizzaDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p>${formatNumber(item.price)}</p>
      <p>${item.menuOrder}</p>

    `;
    pizza.appendChild(pizzaDiv);
  }
});
