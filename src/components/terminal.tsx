import React from 'react';
import styles from './terminal.module.scss';
const Terminal = () => {
    return (
        <div className={styles.terminal}>
           <div className={styles.prompt}>C:\&gt;
            <span> .Net, AWS, Azure, DevOps, Agile, Event Driven, Micro-Services, Customer focus, Technical leader, Leardership</span>
           
           </div>
        </div>
    );
}

export default Terminal;