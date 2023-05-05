import ItemGenerator from "./itemGenerator.js";
import ShoppingEvent from "./shoppingEvent.js";
import ItemSell from "./itemSell.js";

const itemGenerator = new ItemGenerator();
const shoppingEvent = new ShoppingEvent();
const itemSell = new ItemSell();

itemGenerator.setup();
itemSell.setup();