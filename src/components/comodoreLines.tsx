

import React from 'react';
import styles from "./comodoreLines.module.scss";

export default function CommodoreLines() {
 
  return ( 
    <div className={styles.container}>
        <div className={`${styles.line } ${styles.line1}`}></div>
        <div className={`${styles.line } ${styles.line2}`}></div>
        <div className={`${styles.line } ${styles.line3}`}></div>
        <div className={`${styles.line } ${styles.line4}`}></div>
        <div className={`${styles.line } ${styles.line5}`}></div>
  </div>)


}


