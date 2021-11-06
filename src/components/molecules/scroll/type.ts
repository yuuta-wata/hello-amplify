import { UIEventHandler } from 'react'
import { SxProps } from '@mui/system'

import { Props as TypographyProps } from '../../atoms/typography/type'

export type Props = {
  sx?: SxProps
  onScroll: UIEventHandler<HTMLDivElement>
  typographyProps?: TypographyProps
}
