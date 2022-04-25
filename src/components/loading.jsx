import React from 'react';
import styles from './loading.module.css';

function Loading() {
    return (
        <div className={styles.loading}>
            <h1 className={styles.title}>loading...</h1>
        </div>
    );
}

export default Loading;