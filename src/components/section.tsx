import React, { ReactNode } from 'react';
import styles from "./section.module.scss";
import {sectionTopic} from "../app/enumerations/enums";
import Article from './article';

interface SectionProps {
  id?: string;
  headerText: string;   
  topic?: sectionTopic  
  useBorder?: boolean;    
  children?: ReactNode;
}


export default function Section({id, headerText, topic: topic=sectionTopic.None, useBorder=false, children}: SectionProps) {

  const styleMapper = (topic: sectionTopic): string => {
    switch (topic) {
      case sectionTopic.None:
        return styles.none;
      case sectionTopic.About:
        return styles.about;
      case sectionTopic.Game:
        return styles.game;
      case sectionTopic.Services:
        return styles.services;
      case sectionTopic.Cloud:
        return styles.cloud;
      default:
        return styles.none;
    }
  }

  return ( 
  <section className={`${styles.section} ${styleMapper(topic)} ${useBorder ? styles.border : ""}` } id={id}>    
      <h2>{headerText}</h2>
      <div className={styles.wrapper}>
      <div className={styles.content}>
        {children}
      </div>    
      </div>
  </section>);
}