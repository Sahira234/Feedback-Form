import React, { useState } from 'react';
import styles from "../assets/styles/Form.module.css"

const Form = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        surname: "",
        comment: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.name.length > 2 && state.surname.length > 3 && state.comment.length > 3) {
            console.log('Muveffeqiyyetle gonderildi')
            console.log(`${state.name} ${state.surname} ${state.email} ${state.comment}`)
        }
        else alert("Adin uzunlugu 2-den soyadin uzunlugu 3-den commentin uzunlugu 3-den kicik olmamalidir")
        setState({ ...state, name: "", surname: "", email: "", comment: "" })
        console.log(state)
    }
    return (
        <form className={styles.form} onSubmit={(e) => { handleSubmit(e) }}>
            <label className={styles.labelText}>
                Ad:
                <input type="text" className={styles.labelInput} value={state.name} onChange={(e) => { setState({ ...state, name: e.target.value }) }} />
            </label>
            <label className={styles.labelText}>
                Soyad:
                <input type="text" className={styles.labelInput} value={state.surname} onChange={(e) => { setState({ ...state, surname: e.target.value }) }} />
            </label>
            <label className={styles.labelText}>
                Email:
                <input type="email" className={styles.labelInput} value={state.email} onChange={(e) => { setState({ ...state, email: e.target.value }) }} />
            </label>
            <label className={styles.labelText}>
                Сomment:
                <textarea className={styles.labelInput} rows="5" cols="22" value={state.comment} onChange={(e) => { setState({ ...state, comment: e.target.value }) }}></textarea>
            </label>
            <button type='submit' className={styles.btn}>Send</button>
        </form>
    )
}

export default Form