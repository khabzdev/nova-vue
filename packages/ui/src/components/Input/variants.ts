import { cva, type VariantProps } from 'class-variance-authority'

export const inputVariants = cva(
  [
    // Layout
    'relative flex w-full',
    // Typography
    'text-base sm:text-sm',
    'placeholder:text-muted-foreground',
    // Shape & border (COSS style)
    'rounded-lg border border-input',
    // Padding accounting for border
    'px-[calc(theme(spacing.3)-1px)] py-2',
    // Colors
    'bg-popover text-foreground',
    // Shadow system
    'shadow-xs/5',
    // File input styling
    'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
    // Inner radius overlay
    'before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)]',
    'not-disabled:not-read-only:not-focus:before:shadow-[0_1px_theme(colors.black/4%)]',
    // Dark mode refinements
    'dark:bg-input/32',
    'dark:not-disabled:not-read-only:before:shadow-[0_-1px_theme(colors.white/2%)]',
    'dark:not-disabled:not-read-only:not-focus:before:shadow-[0_-1px_theme(colors.white/6%)]',
    // Focus states
    'outline-none transition-shadow',
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
    // Hover
    'hover:bg-accent/50 dark:hover:bg-input/64',
    'focus:bg-popover dark:focus:bg-input/32',
    // Disabled
    'disabled:pointer-events-none disabled:opacity-64 disabled:shadow-none',
    // Read-only
    'read-only:bg-muted read-only:shadow-none',
    // Invalid state
    'aria-invalid:border-destructive aria-invalid:ring-destructive/24',
  ],
  {
    variants: {
      size: {
        default: 'h-9 sm:h-8',
        xs: [
          'h-7 rounded-md px-[calc(theme(spacing.2)-1px)] text-sm sm:h-6 sm:text-xs',
          'before:rounded-[calc(var(--radius-md)-1px)]',
        ],
        sm: 'h-8 px-[calc(theme(spacing[2.5])-1px)] sm:h-7',
        lg: 'h-10 px-[calc(theme(spacing[3.5])-1px)] sm:h-9',
        xl: [
          'h-11 px-[calc(theme(spacing.4)-1px)] text-lg sm:h-10 sm:text-base',
        ],
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export type InputVariants = VariantProps<typeof inputVariants>
