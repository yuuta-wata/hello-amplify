import React from 'react'
import MuiBox from '@mui/material/Box'

import { Props } from './type'

export const Box: React.FC<Props> = ({ children, ...props }) => (
  <MuiBox {...props}>{children}</MuiBox>
)
