const easing = [0.6, -0.05, 0.01, 0.99]

export const fadeInDownHeader = {
  initial: {
    x: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

export const cardHover = {
  scale: 1.05,
  transition: { ease: easing }
}

export const fadeInMovieInfo = {
  initial: { opacity: 1, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: easing,
      duration: 0.55,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}