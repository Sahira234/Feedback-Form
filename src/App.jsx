import { useState } from 'react'

import './App.css'
import UserCV from './components/UserCV'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<UserCV/>
    
    </div>
  )
}

export default App
