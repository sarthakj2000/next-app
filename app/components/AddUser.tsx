'use client'
import React from 'react'
import styles from './ProductUser.module.css'

const AddUser = () => {
  return (
    <div>
        <button  className={styles.card} onClick={()=>{console.log("hello user")}}>Add user</button>
    </div>
  )
}

export default AddUser