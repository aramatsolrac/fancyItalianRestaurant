import "./style/reset.css";
import "./style/index.css";
import menu from "./menu";
import { populateMenu } from "./utils/helper";

const starters = document.getElementById("starters");
const pasta = document.getElementById("pasta");
const pizza = document.getElementById("pizza");
const menuItems = menu.items.sort((a, b) => a.menuOrder - b.menuOrder);
console.log(menuItems);

menuItems.forEach((item) => {
  console.log(item.spicy);
  populateMenu(
    "starters",
    starters,
    item.name,
    item.description,
    item.price,
    item.menuOrder,
    item.type,
    item.spicy
  );
  populateMenu(
    "pasta",
    pasta,
    item.name,
    item.description,
    item.price,
    item.menuOrder,
    item.type,
    item.spicy
  );
  populateMenu(
    "pizza",
    pizza,
    item.name,
    item.description,
    item.price,
    item.menuOrder,
    item.type,
    item.spicy
  );
});
