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
  station: {
    initial: {
      y: -5,
      opacity: 1,
      scale: 1,
    },
    animate: {
      y: 5,
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
  blur1: {
    initial: {
      left: "calc(50% - 395px)",
      top: "calc(50% - 110px)",
      x: "140px",
      y: "40px",
      opacity: 0.4,
      scale: 1,
    },
    animate: {
      x: "40px",
      y: "-80px",
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
  blur2: {
    initial: {
      left: "calc(50% + 395px)",
      top: "calc(50% + 20px)",
      x: "-140px",
      y: "40px",
      opacity: 1,
      scale: 1,
    },
    animate: {
      x: "-40px",
      y: "80px",
      opaity: 0.8,
      scale: 0.98,
    },
    transition: {
      ease: "easeOut",
      duration: 8,
      delay: 4,
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
  zoomInDefault: {
    initial: {
      scale: 0.8,
      opacity: 0.8,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  },
};

export default animationSettings;
