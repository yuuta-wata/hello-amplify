import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CheckBox } from '.'

export default {
  title: 'src/components/atoms/checkBox',
  component: CheckBox
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = args => <CheckBox {...args} />

export const Default = Template.bind({})
Default.args = {}
