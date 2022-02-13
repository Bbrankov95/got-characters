import React from 'react'
import styles from './Button.module.scss'

const Button = ({
    msg = 'Click',
    onClick
}) => {
  return (
    <button onClick={onClick} className={styles.btn}>{msg}</button>
  )
}

export default Button;