import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Stack } from '.'

export default {
  title: 'src/components/atoms/stack',
  component: Stack
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<typeof Stack> = args => <Stack {...args} />

export const Default = Template.bind({})
Default.args = {
  spacing: 3,
  children: (
    <>
      <div>テスト</div>
      <div>テスト</div>
      <div>テスト</div>
    </>
  )
}

export const Row = Template.bind({})
Row.args = {
  spacing: 3,
  direction: 'row',
  children: (
    <>
      <div>テスト</div>
      <div>テスト</div>
      <div>テスト</div>
    </>
  )
}
