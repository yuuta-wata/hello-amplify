import React, { useState } from 'react'
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select'
import MuiMenuItem from '@mui/material/MenuItem'

import { Props } from './type'

export const Select: React.FC<Props> = ({ selectItems }) => {
  const [select, setSelect] = useState<string>('')

  const onChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string)
  }
  return (
    <MuiSelect value={select} onChange={onChange}>
      {selectItems.map((item, index) => (
        <MuiMenuItem value={item} key={item + index.toString()}>
          {item}
        </MuiMenuItem>
      ))}
    </MuiSelect>
  )
}
