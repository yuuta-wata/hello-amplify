import { SxProps } from '@mui/system'
import { Props as StackProps } from '../../atoms/stack/type'
import { Props as ExplainCheckBox } from '../../molecules/explainCheckBox/type'

export type Props = Pick<StackProps, 'spacing' | 'direction'> &
  Pick<ExplainCheckBox, 'onChange'> & {
    sx?: SxProps
    label: string
  }
