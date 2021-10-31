import React, { useState } from 'react'

// presentation/organisms
import { Terms } from '../../../presentation/organisms/terms'

import { Props } from './type'

export const TermsContainer: React.FC<Props> = ({ sx, label, children }) => {
  const [unRead, setUnRead] = useState<boolean>(true)

  return (
    <Terms
      sx={sx}
      onScroll={event => {
        const { scrollTop, scrollHeight, clientHeight } = event.currentTarget
        const end = scrollHeight - clientHeight

        if (scrollTop === end) setUnRead(false)
      }}
      label={label}
      disabled={unRead}
    >
      {children}
    </Terms>
  )
}
