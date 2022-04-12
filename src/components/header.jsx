import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.pagew}>
                <Link to="/">
                    <img src="/images/logo.png" alt="nyoflix" />
                </Link>
                <nav className={styles.navi}>
                    <ul>
                        <li><a href="#">Drama</a></li>
                        <li><a href="#">Comedy</a></li>
                        <li><a href="#">Horror</a></li>
                        <li><a href="#">Documentary</a></li>
                        <li><a href="#">Action</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;