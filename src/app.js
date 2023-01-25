/* eslint-disable */
//import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//generar seleccion de una variable aleatoria//
function getRandomIntInclusive(d, e) {
  return Math.floor(Math.random() * (e - d + 1) + 0);
}
let getexcuse = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoindex = getRandomIntInclusive(0, 3);
  console.log(whoindex);
  let whatindex = getRandomIntInclusive(0, 3);
  console.log(whatindex);
  let whenindex = getRandomIntInclusive(0, 4);
  console.log(whenindex);

  return who[whoindex] + " " + what[whatindex] + " " + when[whenindex];
};
window.onload = () => {
  document.querySelector("#excuseId").innerHTML = getexcuse();
};
