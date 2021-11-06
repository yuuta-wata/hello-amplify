import { FC } from 'react'
import MuiButton from '@mui/material/Button'

import { Props } from './type'

export const Button: FC<Props> = ({ children, ...props }) => (
  <MuiButton {...props}>{children}</MuiButton>
)
