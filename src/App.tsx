import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'
import './App.scss'
// pages
import { TopPage } from './pages/TopPage'
import { HomePage } from './pages/HomePage'

const App: FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TopPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App
