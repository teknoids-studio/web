import React, { ReactNode } from 'react';
import styles from "./section.module.scss";
import {sectionTopic} from "../app/enumerations/enums";
import Article from './article';

interface SectionProps {
  id?: string;
  headerText: string;   
  topic?: sectionTopic      
  children?: ReactNode;
}



export default function Section({id, headerText, topic: topic=sectionTopic.None, children}: SectionProps) {

  
  return ( 
  <section className={`${styles.section}`} id={id}>    
      <h2>{headerText}</h2>
      <div className={styles.wrapper}>
      <div className={styles.content}>
        {children}
      </div>    
      </div>
  </section>);
}