import React from 'react';
import Contacts from './Contacts';
import Experience from './Experience';
import PersonalInfo from "./PersonalInfo";
import styles from "../assets/styles/Cv.module.css"

const UserCV = () => {
  return (
    <div className={styles.cv}>
      <PersonalInfo/>
      <Experience/>
      <Contacts/>
    </div>
  )
}

export default UserCV