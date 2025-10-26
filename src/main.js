// Імпорт модулів
import square, { add, multiply } from "./math.js";
import { greeting, farewell } from "./messages.js";

const resultDiv = document.getElementById("result");

const a = 5;
const b = 3;

resultDiv.innerHTML = `
  <p>${greeting}</p>
  <p>${a} + ${b} = ${add(a, b)}</p>
  <p>${a} × ${b} = ${multiply(a, b)}</p>
  <p>${a}² = ${square(a)}</p>
  <p>${farewell}</p>
`;
