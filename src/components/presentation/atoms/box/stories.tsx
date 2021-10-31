import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '.'

export default {
  title: 'src/components/presentation/atoms/box',
  component: Box
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = args => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  children: `
    MaterialUI BOX
  `
}
