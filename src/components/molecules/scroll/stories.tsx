import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Scroll } from '.'

export default {
  title: 'src/components/molecules/scroll',
  component: Scroll
} as ComponentMeta<typeof Scroll>

const Template: ComponentStory<typeof Scroll> = args => <Scroll {...args} />

export const Default = Template.bind({})
Default.args = {
  sx: {
    width: 200,
    height: 300
  },
  children: `body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
  blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
  neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
  quasi quidem quibusdam. body1. Lorem ipsum dolor sit amet, consectetur
  adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
  inventore consectetur, neque doloribus, cupiditate numquam dignissimos
  laborum fugiat deleniti? Eum quasi quidem quibusdam. body1. Lorem ipsum
  dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
  suscipit, quam beatae rerum inventore consectetur, neque doloribus,
  cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
  quibusdam. body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
  consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
  deleniti? Eum quasi quidem quibusdam.`
}
