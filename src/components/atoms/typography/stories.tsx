import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Typography } from '.'

export default {
  title: 'src/components/atoms/typography',
  component: Typography
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = args => (
  <Typography {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: `
    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
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
    deleniti? Eum quasi quidem quibusdam.
  `
}
