import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import Navbar from './Navbar'

const HeaderPage = () => {
  return (
    <header className={styles.header}>
      <Navbar/>
      <div className={styles.right}>
        <Link href="/login" className={styles.btn}>Login</Link>
        <Link href="/register" className={styles.btn}>Register</Link>
      </div>
    </header>
  )
}

export default HeaderPage
