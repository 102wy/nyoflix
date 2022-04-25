import React from 'react';
import styles from './banner.module.css';

function Banner() {
    return (
        <div className={styles.container}>
            <img src={`${process.env.PUBLIC_URL}/images/main-img.png`} alt="배너이미지" />
            <h3 className={styles.title}>SPIDER-MAN™<br /> FAR FROM HOME</h3>
            <p className={styles.genre}>2019 | SUPERHERO, ACTION</p>
            <p className={styles.summary}>Following the events of Avengers: Endgame, Peter Parker (Tom Holland) <br />returns in Spider-Man: Far From Home.<br />Our friendly neighborhood Super Hero decides to join his best friends<br /> Ned, MJ, and the rest of the gang on a European vacation.<br /> However, Peter’s plan to leave super heroics behind for a few weeks is <br />quickly scrapped when he begrudgingly agrees to help Nick Fury <br />(Samuel L. Jackson) uncover the mystery of several elemental creature attacks. <br />Spider-Man and Mysterio (Jake Gyllenhaal) join forces to fight the havoc unleashed <br />across the continent but all is not as it seems.</p>
        </div>
    );
}

export default Banner;