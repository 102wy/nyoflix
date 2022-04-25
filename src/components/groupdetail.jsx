import React from 'react';
import styles from './groupdetail.module.css';

function Groupdetail({ title, id, coverImg, summary, language }) {
    return (
        <div className={styles.container}>
            <img src={coverImg} alt="" />
            <h1>{title}</h1>
        </div>
    );
}

export default Groupdetail;