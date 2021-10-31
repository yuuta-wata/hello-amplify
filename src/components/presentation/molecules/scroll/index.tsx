import React from 'react'
// atoms
import { Box } from '../../atoms/box'
import { Typography } from '../../atoms/typography'

import { Props } from './type'

export const Scroll: React.FC<Props> = ({
  sx,
  onScroll,
  typographyProps,
  children
}) => (
  <Box sx={{ overflowY: 'scroll', ...sx }} onScroll={onScroll}>
    <Typography {...typographyProps}>{children}</Typography>
  </Box>
)
