import React from 'react'
import MuiCheckBox from '@mui/material/Checkbox'

import { Props } from './type'

export const CheckBox: React.FC<Props> = ({ ...props }) => (
  <MuiCheckBox {...props} />
)
