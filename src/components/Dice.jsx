import React, { useEffect, useState } from 'react';
import styles from "../assets/styles/Dice.module.css"

const Dice = () => {
const [state,setState]=useState(1)
useEffect(()=>{
    window.addEventListener("keypress",(e)=>{
        if(e.keyCode==13){
setState(Math.floor(Math.random() * 6) + 1)
        }
    })
})
  return (
    <div>
        <div className={styles.kare}>
{state}
        </div>
    </div>
  )
}

export default Dice