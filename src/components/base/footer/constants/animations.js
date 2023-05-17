export const innerShape = {
  initial: {
    top: 0,
    left: 0,
    y: "15%",
    x: "-35%",
    width: "120%",
    maxWidth: "620px",
    opacity: 0.4,
    skew: 1,
  },
  animate: {
    opacity: 1,
    y: "-4%",
    x: "-10%",
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
