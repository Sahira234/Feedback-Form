import { useState } from 'react'

import './App.css'
import Profile from "./components/Profile"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Profile/>
    
    </div>
  )
}

export default App
