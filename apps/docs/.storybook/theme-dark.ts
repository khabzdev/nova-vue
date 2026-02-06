import { create } from '@storybook/theming/create'

export default create({
  base: 'dark',

  // Brand
  brandTitle: '🥬 Nova Vue',
  brandUrl: 'https://github.com',
  brandTarget: '_self',

  // Typography
  fontBase: '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"Fira Code", "JetBrains Mono", monospace',

  // Colors
  colorPrimary: '#fafafa',
  colorSecondary: '#a1a1aa',

  // UI
  appBg: '#09090b',
  appContentBg: '#18181b',
  appPreviewBg: '#09090b',
  appBorderColor: '#27272a',
  appBorderRadius: 8,

  // Text colors
  textColor: '#fafafa',
  textInverseColor: '#18181b',
  textMutedColor: '#a1a1aa',

  // Toolbar
  barTextColor: '#a1a1aa',
  barSelectedColor: '#fafafa',
  barHoverColor: '#fafafa',
  barBg: '#18181b',

  // Form colors
  inputBg: '#27272a',
  inputBorder: '#3f3f46',
  inputTextColor: '#fafafa',
  inputBorderRadius: 6,

  // Button
  buttonBg: '#27272a',
  buttonBorder: '#3f3f46',

  // Boolean
  booleanBg: '#27272a',
  booleanSelectedBg: '#fafafa',
})
