import { FormControlLabelProps } from '@mui/material/FormControlLabel'

import { Props as CheckBoxProps } from '../../atoms/checkBox/type'

export type Props = {
  sx?: Pick<FormControlLabelProps, 'sx'>
  label: string
  disabled?: boolean
  checkBoxProps?: CheckBoxProps
}
