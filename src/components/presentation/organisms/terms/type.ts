import { UIEventHandler } from 'react'
import { SxProps } from '@mui/system'

export type Props = {
  sx?: SxProps
  label: string
  disabled?: boolean
  onScroll: UIEventHandler<HTMLDivElement>
}
