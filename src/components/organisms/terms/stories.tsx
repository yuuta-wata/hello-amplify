import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Terms } from '.'

export default {
  title: 'src/components/organisms/terms',
  component: Terms
} as ComponentMeta<typeof Terms>

const Template: ComponentStory<typeof Terms> = args => <Terms {...args} />

export const Default = Template.bind({})
Default.args = {
  sx: {
    width: 200,
    height: 300
  },
  label: '同意する。',
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

export const Readed = Template.bind({})
Readed.args = {
  sx: {
    width: 200,
    height: 300
  },
  label: '同意する。',
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
