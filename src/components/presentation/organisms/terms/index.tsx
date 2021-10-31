import React from 'react'

// molecules
import { Scroll } from '../../molecules/scroll'
import { ExplainCheckBox } from '../../molecules/explainCheckBox'

import { Props } from './type'

export const Terms: React.FC<Props> = ({
  sx,
  label,
  disabled,
  onScroll,
  children
}) => (
  <>
    <Scroll sx={sx} onScroll={onScroll}>
      {children}
    </Scroll>
    <ExplainCheckBox label={label} disabled={disabled} />
  </>
)
