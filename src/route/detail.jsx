import React from 'react';
import styles from './detail.module.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from '../components/header';


function Detail() {

    const [loading, setloading] = useState(true);

    const { id } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        getDetail();
    }, []);
    const getDetail = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetails(json.data.movie);
        setloading(false);
    }

    return (
        <>
            {loading ? (<h1 className={styles.loading}>Loading...</h1>
            ) : (
                <>
                    <div className={styles.container}>
                        <div className={styles.leftcont}>
                            <img src={details.large_cover_image} alt="이미지" />
                        </div>
                        <div className={styles.rightcont}>
                            <h2 className={styles.title}>{details.title}</h2>
                            <p className={styles.summary}>{details.description_intro}</p>
                            <p className={styles.rating}>rating : {details.rating}</p>
                            <p className={styles.running}>Running Time : {details.runtime} minuites</p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Detail;