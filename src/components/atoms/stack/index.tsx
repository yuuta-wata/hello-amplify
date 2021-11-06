import { FC } from 'react'
import MuiStack from '@mui/material/Stack'

import { Props } from './type'

export const Stack: FC<Props> = ({ children, ...props }) => (
  <MuiStack {...props}>{children}</MuiStack>
)
