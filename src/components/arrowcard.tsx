'use client';

import React, { ReactNode } from 'react';
import styles from "./arrowCard.module.scss";
import {sectionTopic} from "../app/enumerations/enums";
import Invader from './invader';
import Image from 'next/image';


interface ArrowCardProps {
    headerText: string;
     href?: string;     
     traget?: string;    
     style?: sectionTopic      
     children?: ReactNode;
 }

 const renderHeader = (headerText : string, style : sectionTopic = sectionTopic.None) => {
    
    return (<h2>
        {headerText}
        {style === sectionTopic.Game ? 
            <span><Invader width='30px' height='30px'></Invader></span>                 
        :  
            <span>-&gt;</span>
        }    
    </h2>);
    
    
 }

const ArrowCard = ({headerText, href = '/',traget ="_blank", style=sectionTopic.None, children}: ArrowCardProps) => {
    return(
    <a
          href={href}
          className={styles.card}
          target={traget}
          rel="noopener noreferrer"
        >          
           {renderHeader(headerText, style)}
          
          {children}
        </a>
    );
}

export { ArrowCard };