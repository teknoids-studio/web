
import React, { ReactNode } from 'react';
import styles from "./arrowCard.module.scss";
import { sectionTopic } from "../app/enumerations/enums";
import Invader from './invader';
import Image from 'next/image';

interface ArrowCardProps {
    headerText: string;
    href?: string;
    traget?: string;
    style?: sectionTopic
    children?: ReactNode;
}

const renderHeader = (headerText: string, style: sectionTopic = sectionTopic.None) => {

    return (<h2>
        {headerText}
        {style === sectionTopic.Game ?
            <span><Invader width='30px' height='30px'></Invader></span>
            :
            <span>-&gt;</span>
        }
    </h2>);
}

const ArrowCard = ({ headerText, href = '/', traget = "_blank", style = sectionTopic.None, children }: ArrowCardProps) => {
    if (href === null || href === undefined || href === '' || href === '#') {
        return (

            <div className={styles.card}>
                {renderHeader(headerText, style)}
                {children}
            </div>
        )
    }
    else {
        return (
            <a href={href} target={traget} className={styles.card}>
                {renderHeader(headerText, style)}
                {children} </a>)
    }
}

export { ArrowCard };