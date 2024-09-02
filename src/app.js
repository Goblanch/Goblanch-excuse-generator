/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Excuse variables
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  let excuse = generateExcuse();
  document.getElementById("excuse").innerHTML = excuse;
  console.log(excuse);
};

function generateExcuse() {
  let excuse = who[getRandomIndex(0, who.length)];
  excuse = excuse + " " + action[getRandomIndex(0, action.length)];
  excuse = excuse + " " + what[getRandomIndex(0, what.length)];
  excuse = excuse + " " + when[getRandomIndex(0, when.length)];

  return excuse;
}

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
