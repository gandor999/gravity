import {
  frameRate,
  velocity,
  windowInnerWidth,
} from "../constants/scalar-variables.js";

const moveRight = (ball) => {
  const loop = setInterval(() => {
    ball.style.left = parseFloat(ball.style.left) + velocity + "px";
    if (parseFloat(ball.style.left) >= windowInnerWidth - 50) {
      // handle collision
      clearInterval(loop);
    }
  }, frameRate);
};

export { moveRight };
