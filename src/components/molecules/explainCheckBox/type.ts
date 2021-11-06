import { FormControlLabelProps } from '@mui/material/FormControlLabel'

import { Props as CheckBoxProps } from '../../atoms/checkBox/type'

export type Props = Pick<FormControlLabelProps, 'sx' | 'onChange'> & {
  label: string
  disabled?: boolean
  checkBoxProps?: CheckBoxProps
}
