export const EASE_PROPS = [0.1, 0.6, 0.8, 1];

export const container = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: EASE_PROPS,
      staggerChildren: 0.15,
      when: 'beforeChildren',
    },
  },
};

export const item = {
  initial: {
    opacity: 0,
    translateY: 10,
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.333, ease: EASE_PROPS },
  },
};

export const itemFadeToRight = {
  initial: {
    opacity: 0,
    translateX: -10,
  },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: { duration: 0.333, ease: EASE_PROPS },
  },
};

export const itemFadeToLeft = {
  initial: {
    opacity: 0,
    translateX: 10,
  },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: { duration: 0.333, ease: EASE_PROPS },
  },
};
