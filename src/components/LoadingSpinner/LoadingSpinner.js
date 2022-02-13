import React from 'react';
import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.spinner}></div>
        <h2>Please wait ...</h2>
    </div>
  )
}

export default LoadingSpinner;
