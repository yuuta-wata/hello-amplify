import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Top } from '../components/template/top'

export const TopPage: FC = () => {
  const navigate = useNavigate()
  const onPushHome = () => {
    navigate('/home')
  }
  return <Top onPush={onPushHome} />
}
