import React, { useEffect, useState } from 'react'
import useGetDta from '../hooks/useGetDta'

const Compo = () => {
    const [text,setText]=useState("");
    const [showData,setShowData]=useState()
    const data=useGetDta("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood");
const handleChange=(e)=>{
setText(e.target.value);
}
const handleClick=()=>{
    data.map((item)=>{
        if(item===text){
            set
        }
    })
}
useEffect(()=>{
   
},[])
  return (
    <div>
        <input type="text" value={text} onChange={handleChange} />
        <button type='button' onClick={handleClick}>axtar</button>
    </div>
  )
}

export default Compo