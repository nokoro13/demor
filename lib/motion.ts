export const appleEaseOut = [0.16, 1, 0.3, 1] as const;

export const motionTransition = {
  slow: { duration: 1, ease: appleEaseOut },
  medium: { duration: 0.75, ease: appleEaseOut },
  fast: { duration: 0.55, ease: appleEaseOut },
} as const;
