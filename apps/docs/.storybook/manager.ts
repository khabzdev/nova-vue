import { addons } from '@storybook/manager-api'
import lettuceTheme from './theme'

addons.setConfig({
  theme: lettuceTheme,
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
})
