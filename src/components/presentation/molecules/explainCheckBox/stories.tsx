import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ExplainCheckBox } from '.'

export default {
  title: 'src/components/presentation/molecules/explainCheckBocx',
  component: ExplainCheckBox
} as ComponentMeta<typeof ExplainCheckBox>

const Template: ComponentStory<typeof ExplainCheckBox> = args => (
  <ExplainCheckBox {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: '同意する'
}
