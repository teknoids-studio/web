import React, { ReactNode } from 'react';
import styles from "./section.module.scss";
import {sectionTopic} from "../app/enumerations/enums";

interface SectionProps {
  id?: string;
  headerText: string;   
  style?: sectionTopic      
  children?: ReactNode;
}

export default function Section({id, headerText, style=sectionTopic.None, children}: SectionProps) {
  return ( 
  <section className={styles.section} id={id}>
    <h2>{headerText}</h2>
    <div className={styles.content}>
      {children}
    </div>
  </section>);
}