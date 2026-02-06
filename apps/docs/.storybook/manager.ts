import { addons } from '@storybook/manager-api'
import NovaTheme from './theme'

addons.setConfig({
  theme: NovaTheme,
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
