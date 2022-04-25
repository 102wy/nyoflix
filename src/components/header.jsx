import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import NavList from '../NavList';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.pagew}>
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="nyoflix" />
                </Link>
                <nav className={styles.navi}>
                    <ul>
                        {NavList.map(list => {
                            return (
                                <li><Link to={list.path} className={styles.link}>{list.title}</Link></li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;