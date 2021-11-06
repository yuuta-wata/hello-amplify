import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from '.'

export default {
  title: 'src/components/molecules/select',
  component: Select
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  selectItems: ['テスト1', 'テスト2', 'テスト3']
}
