import React, { useState } from 'react'

const customButton  = () => {
    const [text,setText]=useState("button");
    const handleClick=(e)=>{
        e.target.style.backgroundColor="red"
        return <p>Warnmessage</p>
    }
  return (
    <div>
        <button type='button' onClick={handleClick}>
{text}
        </button>
         </div>
  )
}

export default customButton 