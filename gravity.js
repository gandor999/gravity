import { moveRight } from "./gravity-logic/movement-functions/moveRight.js";
import { falling } from "./gravity-logic/movement-functions/falling.js";

const ball = document.querySelector("#ball");
const rect = ball.getBoundingClientRect(); // this is for bouncing off

window.addEventListener("load", () => {
  ball.style.left = 0;
  ball.style.top = 0;
});

window.addEventListener("keydown", () => {
  falling(ball);
  moveRight(ball);
});
