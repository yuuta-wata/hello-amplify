import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
// template
import { Home } from '../components/template/home'

export const HomePage: FC = () => {
  const navigate = useNavigate()
  const onPushTop = () => {
    navigate('/')
  }
  const selectItems: string[] = [
    'スイカ',
    'メロン',
    'みかん',
    'りんご',
    'パイナップル'
  ]

  return (
    <>
      <Home selectItems={selectItems} onPush={onPushTop} />
    </>
  )
}
