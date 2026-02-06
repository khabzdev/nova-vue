import type { Preview, Renderer } from '@storybook/vue3'
import { withThemeByClassName } from '@storybook/addon-themes'
import '@lettuce/ui/styles.css'
import './styles.css'
import lettuceTheme from './theme'

const preview: Preview = {
  parameters: {
    docs: {
      theme: lettuceTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<Renderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
