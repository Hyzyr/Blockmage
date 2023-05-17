const animationSettings = {
  blur1: {
    initial: {
      left: "20%",
      top: "60%",
      x: "-40px",
      y: "0",
      opacity: 0.4,
      scale: 1,
    },
    animate: {
      x: "20px",
      y: "40px",
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
      left: "75%",
      top: "20%",
      x: "10px",
      y: "10px",
      opacity: 1,
      scale: 1,
    },
    animate: {
      x: "-40px",
      y: "-30px",
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
  mainBox: {
    initial: {
      opacity: 0.4,
      scale: 0.7,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
  box1: {
    initial: {
      opacity: 0,
      y: 10,
      x: -5,
      scale: 0.7,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 5,
      scale: 1,
    },
    transition: {
      ease: "easeOut",
      duration: 0.8,
      repeat: Infinity,
      repeatType: "mirror",
      delay: 1,
      repeatDelay: .8,
    },
  },
  box2: {
    initial: {
      opacity: 0,
      y: 10,
      x: -5,
      scale: 0.7,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 5,
      scale: 1,
    },
    transition: {
      ease: "easeOut",
      duration: 0.6,
      repeat: Infinity,
      repeatType: "mirror",
      delay: 1.6,
      repeatDelay: 1.6,
    },
  },
  lock: {},
};

export default animationSettings;
