export const innerShape = {
  initial: {
    top: "50%",
    left: "50%",
    y: "-55%",
    x: "-55%",
    width: "500px",
    opacity: 0.6,
    skew: 1,
    rotate: 45,
  },
  animate: {
    opacity: 1,
    y: "-45%",
    x: "-45%",
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
