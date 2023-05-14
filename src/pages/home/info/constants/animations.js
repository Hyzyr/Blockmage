export const innerShape = {
  initial: {
    top: 0,
    left: 0,
    y: "-35%",
    x: "-25%",
    width: "80%",
    opacity: 0.4,
    skew: 1,
  },
  animate: {
    opacity: 1,
    y: "-20%",
    x: "0%",
    skew: 10,
  },
  transition: {
    ease: "easeOut",
    duration: 26,
    repeat: Infinity,
    repeatDelay: 2,
    repeatType: "mirror",
  },
};
