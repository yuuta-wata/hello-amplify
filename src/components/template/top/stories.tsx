import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Top } from '.'

export default {
  title: 'src/components/template/top',
  component: Top
} as ComponentMeta<typeof Top>

const Template: ComponentStory<typeof Top> = args => <Top {...args} />

export const Default = Template.bind({})
Default.args = {}
