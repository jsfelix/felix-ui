import type { Preview } from "@storybook/react";
import '@felix-ui/react/dist/global.css'
import '../src/styles/global.css'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Getting started',
          ['Overview', 'Installation'],
          'Tokens',
          'Surfaces',
          ['Box'],
          'Typography',
          ['Text', 'Heading'],
          'Data Display',
          ['Avatar']
        ]
      }
    }
  }
};

export default preview;
