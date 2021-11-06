import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
// pages
import { TopPage } from './pages/TopPage'
import { HomePage } from './pages/HomePage'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
