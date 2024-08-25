'use client';

import React from 'react';
import styles from "./comodoreLines.module.scss";
import { useInView } from "@/hooks/useInView";

export default function CommodoreLines() {
 
  const [me, isInView] = useInView({ threshold: 0.5 }); // Adjust threshold as needed


  console.log(isInView);
  return ( 
    
    <div ref={me as React.RefObject<HTMLDivElement>} className={styles.container}>
      
        <div className={`${styles.line } ${styles.line1}`}></div>
        <div className={`${styles.line } ${styles.line2}`}></div>
        <div className={`${styles.line } ${styles.line3}`}></div>
        <div className={`${styles.line } ${styles.line4}`}></div>
        <div className={`${styles.line } ${styles.line5}`}></div>
  </div>)


}


