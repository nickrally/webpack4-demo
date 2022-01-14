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

  const img1 = document.createElement("img");
  img1.src = "images/mn.png";
  element.append(img1);

  const img2 = document.createElement("img");
  img2.src = "other-images/va.gif";
  element.append(img2);

  const img3 = document.createElement("img");
  img3.src = "other-images/av.gif";
  element.append(img3);

  return element;
}

document.body.appendChild(component());
