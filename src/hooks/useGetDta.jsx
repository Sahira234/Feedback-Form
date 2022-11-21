import React, { useEffect, useState } from 'react';
import axios from "axios";

const useGetDta = (props) => {
    const [state,setState]=useState([]);
    useEffect(()=>{
fetch(props).then(response=>{return response.json()}).then(data=>setState(data))
    },[]);
  return {
    state
  }
}

export default useGetDta