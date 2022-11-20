import { useState } from 'react'

import './App.css'
import Form from './components/Form'
import UserCV from './components/UserCV'
import UserLogin from './components/UserLogin'

function App() {

  return (
    <div className="App">
<UserCV/>
<Form/>
<UserLogin/>
    
    </div>
  )
}

export default App
