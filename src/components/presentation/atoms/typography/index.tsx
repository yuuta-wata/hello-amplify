import React from 'react'
import MuiTypograph from '@mui/material/Typography'

import { Props } from './type'

export const Typography: React.FC<Props> = ({ ...props }) => (
  <MuiTypograph {...props} />
)
