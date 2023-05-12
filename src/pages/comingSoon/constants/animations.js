const animationSettings = {
  digitsBox: {
    initial: {
      x: 20,
      y: 20,
      opacity: 1,
      scale: 1,
    },
    animate: {
      x: 0,
      y: 0,
      opaity: 0.6,
      scale: 0.98,
    },
    transition: {
      ease: "easeOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 0.6,
    },
  },
  innerBox: {
    initial: {
      rotateX: 90,
      opacity: 0,
    },
    animate: {
      rotateX: 0,
      opacity: 1,
    },
    transition: {
      ease: "easeOut",
      duration: 0.4,
    },
  },
  innerShape: {
    initial: {
      left: "45%",
      y: "-5%",
      x: "-5%",
      width: "75%",
      opacity: 0.4,
      skew: 1,
    },
    animate: {
      opacity: 1,
      y: "-10%",
      x: "5%",
      skew: 10,
    },
    transition: {
      ease: "easeOut",
      duration: 16,
      repeat: Infinity,
      repeatDelay: 2,
      repeatType: "mirror",
    },
  },
};

export default animationSettings;
