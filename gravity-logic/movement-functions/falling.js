import {
  frameRate,
  gravity,
  windowInnerHeight,
} from "../constants/scalar-variables.js";

let gravityIsLooping = true;

const falling = (ball) => {
  const loopGravity = setInterval(() => {
    if (
      parseFloat(ball.style.top) >
      windowInnerHeight - parseInt(ball.offsetHeight + 2) // handle collision
    ) {
      gravityIsLooping = false;
      clearInterval(loopGravity);
    } else {
      const loopVelocity = setInterval(() => {
        if (gravityIsLooping == false) {
          clearInterval(loopVelocity);
        } else {
          ball.style.top = parseFloat(ball.style.top) + gravity + "px";
        }
      }, frameRate);
    }
  }, frameRate);
};

export { falling };
