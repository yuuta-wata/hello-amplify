import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
// atoms
import { CheckBox } from '../../atoms/checkBox'

import { Props } from './type'

export const ExplainCheckBox: React.FC<Props> = ({
  sx,
  label,
  disabled,
  checkBoxProps
}) => (
  <FormControlLabel
    sx={sx}
    label={label}
    disabled={disabled}
    control={<CheckBox {...checkBoxProps} />}
  />
)
