import type { Preview } from '@storybook/vue3'
import './tailwind.css'
import './styles.css'
import './colors.css'
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
  globalTypes: {
    theme: {
      description: 'Theme mode',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
    color: {
      description: 'Color scheme',
      toolbar: {
        title: 'Color',
        icon: 'paintbrush',
        items: ['neutral', 'blue', 'red', 'rose', 'orange', 'yellow', 'green', 'violet'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
    color: 'neutral',
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'light'
      const color = context.globals.color || 'neutral'
      
      return {
        components: { story },
        setup() {
          return { theme, color }
        },
        template: `<div :class="theme === 'dark' ? 'dark' : ''" :data-color="color" class="bg-background text-foreground p-4"><story /></div>`,
      }
    },
  ],
}

export default preview
