const simulateMeters = 555; // adjust this to make the gravity look more realisitic

// Take note we want to simulate gravity in a realisitc way but the velocity for pixels on the screen should mirror what it exactly is

const velocity = 1; // 1px/sec
const gravity = 9.8 / simulateMeters; // 9.8m/sec squared
const frameRate = 1 / 60; // 1 second is 60 frames

const ballMass = 0;

const windowInnerHeight = window.innerHeight;

export {
  simulateMeters,
  velocity,
  gravity,
  frameRate,
  windowInnerHeight,
  ballMass,
};
