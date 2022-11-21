import { useState } from 'react'

import './App.css'
import Form from './components/Form'
import UserCV from './components/UserCV'
import UserLogin from './components/UserLogin';
import Dice from "./components/Dice"
import Compo from './components/Compo';

function App() {

  return (
    <div className="App">
<UserCV/>
<Form/>
<UserLogin/>
<div className='dices'>
<Dice/>
<Dice/>
</div>
<Compo/>
    
    </div>
  )
}

export default App
