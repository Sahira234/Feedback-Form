import React, { useState } from 'react';
import styles from "../assets/styles/UserLogin.module.css"

const UserLogin = () => {
    const [validated, setValidated] = useState(false);
    const [valdatepass, setvalidatepass] = useState(true)
    const [state, setState] = useState({
        email: "",
        pass: ""
    })
    const checkemail = (e) => {
        setState({ ...state, email: e.target.value });
        let lastindex = state.email.lastIndexOf(".");
        console.log(state.email.slice(lastindex, state.email.length));
        if (state.email.slice(lastindex, state.email.length) === ".ru") {
            setValidated(true)
        }
        else { setValidated(false) }
    }
    const checkpass=(e)=>{
        setState({ ...state, pass: e.target.value });
        setvalidatepass(false);
        if (state.pass.length >= 8) {
            setvalidatepass(true)
        }
        else setvalidatepass(false)
    }
    return (
        <div>
            <form className={styles.form} onSubmit={(e)=>{e.preventDefault();setState({...state,email:"",pass:""})}}>
                <input type="email" name='email' id='email' value={state.email} onChange={checkemail} />
                {validated ? null : <p>Yalniz ru domenlerine icaze verilir</p>}
                <input type="password" name="pass" id="pass" value={state.pass} onChange={checkpass} />
                {valdatepass?null:<p>En azi 8 simvol</p>}
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default UserLogin