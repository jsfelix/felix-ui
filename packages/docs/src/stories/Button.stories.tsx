import { ComponentProps } from 'react'

import { Button } from '@felix-ui/react'
import { Meta, StoryObj } from '@storybook/react'

type ButtonProps = ComponentProps<typeof Button>

export default {
  title: 'Inputs/Button',
  component: Button,
  args: {
    children: 'Send',
    disabled: false,
    loading: false,
  },
  argTypes: {},
} satisfies Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
  },
}

export const Destructive: StoryObj<ButtonProps> = {
  args: {
    variant: 'destructive',
  },
}
