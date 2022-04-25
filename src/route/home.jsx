import React from 'react';
import styles from './home.module.css';
import NavList from '../NavList';
import Slide from '../components/slide';
import { Link } from 'react-router-dom';
import Banner from '../components/banner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Home() {
    return (
        <div>
            <Banner />
            {NavList.map(list => {
                return (
                    <div className={styles.container}>
                        <h3 className={styles.title_container}>
                            <Link to={list.path}>
                                <span className={styles.title}><FontAwesomeIcon icon="fa-solid fa-video" className={styles.icon} />{list.title}</span>
                            </Link>
                        </h3>
                        <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${list.path}&sort_by=year`} />
                    </div>
                )
            })}
        </div>
    );
}

export default Home;