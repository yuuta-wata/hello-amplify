import { FC } from 'react'
import logo from './logo.svg'
import './App.scss'

import { TermsContainer } from './components/container/organisms/terms'

const App: FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <br />
        <TermsContainer sx={{ width: 300, height: 400 }} label='同意する。'>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam. body1. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus,
          cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
          quidem quibusdam. body1. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
          rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </TermsContainer>
      </header>
    </div>
  )
}

export default App
