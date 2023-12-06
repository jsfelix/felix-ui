import { Config } from 'tailwindcss'

import { colors, fontFamily } from '@felix-ui/tokens'

export const tailwindConfig: Config = {
  content: ['src/**/*.tsx'],
  theme: {
    colors,
    fontFamily,
  },
  plugins: [],
}
