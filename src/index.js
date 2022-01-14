import _ from "lodash";
import printMe from "./print.js";
import ohNoes from "./ohnoes.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack!?"], " ");
  btn.innerHTML = "Click and check console";
  btn.onclick = printMe;
  element.appendChild(btn);

  const btn2 = document.createElement("button");
  btn2.innerHTML = "Say Oh Noes!";
  btn2.onclick = ohNoes;
  element.appendChild(btn2);

  return element;
}

document.body.appendChild(component());
