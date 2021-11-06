import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Home } from '.'

export default {
  title: 'src/components/template/home',
  component: Home
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = args => <Home {...args} />

export const Default = Template.bind({})
Default.args = {
  selectItems: ['スイカ', 'メロン', 'みかん', 'りんご', 'パイナップル']
}
