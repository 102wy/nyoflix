import React from 'react';
import styles from './drama.module.css';
import { Link } from "react-router-dom";

function Drama({ coverImg, title, year }) {
    return (
        <Link to="/movie" className={styles.slideSection}>
            <img src={coverImg} alt="커버이미지" className={styles.img} />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.year}>Year : {year}</p>
            </div>
        </Link>
    );
}

export default Drama;