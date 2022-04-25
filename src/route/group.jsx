import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Groupdetail from '../components/groupdetail';
import Loading from '../components/loading';
import styles from './group.module.css';
function Group() {
    const { genre } = useParams();
    console.log({ genre });
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMovies = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?${genre}`).json());
        console.log(json);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, [])
    return (
        <div className={styles.container}>
            {loading ? <Loading /> :
                <>
                    <ul>
                        {movies.map(movie => {
                            return <li id={movie.id}><Groupdetail id={movie.id} title={movie.title} /></li>
                        })}
                    </ul>
                </>
            }
        </div>
    );
}

export default Group;