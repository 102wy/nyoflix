import React from 'react';
import styles from "./movie.module.css";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, year }) {

    return (
        <div className={styles.slideSection}>
            <img src={coverImg} alt="커버이미지" className={styles.img} />
            <Link to={`/movie/${id}`} className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.year}>Year : {year}</p>
            </Link>
        </div>
    )
}

export default Movie;