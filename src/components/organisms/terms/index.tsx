import React, { useState, UIEvent } from 'react'
// atoms
import { Stack } from '../../atoms/stack'
// molecules
import { Scroll } from '../../molecules/scroll'
import { ExplainCheckBox } from '../../molecules/explainCheckBox'
// type
import { Props } from './type'

export const Terms: React.FC<Props> = ({
  sx,
  label,
  spacing = 3,
  direction,
  onChange,
  children
}) => {
  const [disabled, setDisabled] = useState<boolean>(true)

  const onScroll = (event: UIEvent<Element, globalThis.UIEvent>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget
    const scrollEnd = scrollHeight - clientHeight
    if (scrollTop === scrollEnd) setDisabled(false)
  }
  return (
    <Stack spacing={spacing} direction={direction}>
      <Scroll sx={sx} onScroll={onScroll}>
        {children}
      </Scroll>
      <ExplainCheckBox label={label} disabled={disabled} onChange={onChange} />
    </Stack>
  )
}
