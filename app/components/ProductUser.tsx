import React from 'react'
import AddUser from './AddUser'
import styles from './ProductUser.module.css'

const ProductUser = () => {
  return (
    <div className={styles.card}>
        <AddUser />
    </div>

  )
}

export default ProductUser