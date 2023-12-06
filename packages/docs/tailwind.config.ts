import { Config } from 'tailwindcss'

import { tailwindConfig } from '@felix-ui/react'

const config: Config = {
  content: ['./src/**/*.tsx', './src/**/*.mdx'],
  theme: {
    extend: tailwindConfig.theme,
  },
}

export default config
