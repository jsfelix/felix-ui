import { Config } from 'tailwindcss'

import { colors, fontFamily } from '@felix-ui/tokens'

export const tailwindConfig: Config = {
  content: ['src/**/*.tsx'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors,
    fontFamily,
  },
  plugins: [],
}
