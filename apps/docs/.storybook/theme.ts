import { create } from '@storybook/theming/create'

export default create({
  base: 'light',

  // Brand
  brandTitle: '🥬 Lettuce UI',
  brandUrl: 'https://github.com',
  brandTarget: '_self',

  // Typography
  fontBase: '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"Fira Code", "JetBrains Mono", monospace',

  // Colors
  colorPrimary: '#18181b',
  colorSecondary: '#18181b',

  // UI
  appBg: '#fafafa',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e4e4e7',
  appBorderRadius: 8,

  // Text colors
  textColor: '#18181b',
  textInverseColor: '#fafafa',
  textMutedColor: '#71717a',

  // Toolbar
  barTextColor: '#71717a',
  barSelectedColor: '#18181b',
  barHoverColor: '#18181b',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e4e4e7',
  inputTextColor: '#18181b',
  inputBorderRadius: 6,

  // Button
  buttonBg: '#f4f4f5',
  buttonBorder: '#e4e4e7',

  // Boolean
  booleanBg: '#f4f4f5',
  booleanSelectedBg: '#18181b',
})
