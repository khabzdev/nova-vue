/**
 * Fade animation preset for overlays and backgrounds.
 */
export const fadePreset = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
} as const

/**
 * Scale with spring animation for dialogs and modals.
 */
export const scaleSpringPreset = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 30 },
}

/**
 * Slide up animation for toasts and notifications.
 */
export const slideUpPreset = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2, ease: 'easeOut' as const },
}

/**
 * Popover animation for dropdowns and selects.
 */
export const popoverPreset = {
  initial: { opacity: 0, y: -4, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -4, scale: 0.98 },
  transition: { duration: 0.15 },
} as const

/**
 * Button press animation for micro-interactions.
 */
export const buttonPressPreset = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
}
