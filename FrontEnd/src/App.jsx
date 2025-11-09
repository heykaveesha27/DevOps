import { useState } from 'react'

import './App.css'
import WelcomePage from './Pages/WelcomePage'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import Dashboard from './Pages/Dashboard'

function App() {
  

  return (
    <div className="App"><BrowserRouter>
     <Routes>
      <Route path='/' element={<WelcomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
