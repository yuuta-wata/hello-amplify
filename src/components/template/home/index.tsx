import { FC } from 'react'
// atoms
import { Button } from '../../atoms/button'
// molecules
import { Select } from '../../molecules/select'

import { Props } from './type'

export const Home: FC<Props> = ({ selectItems, onPush }) => {
  return (
    <div className='App-header'>
      <Select selectItems={selectItems} />
      <br />
      <Button onClick={onPush}>トップページ</Button>
    </div>
  )
}
