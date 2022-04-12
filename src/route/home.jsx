import React from 'react';
import styles from './home.module.css';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Movie from '../components/movie';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation } from 'swiper';
import Drama from '../components/drama';
SwiperCore.use([Navigation]);

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [dramas, setDrama] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    const getDrama = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?genres=Drama`)).json();
        setDrama(json.data.movies);
    }
    useEffect(() => {
        getMovies();
        getDrama();
    }, []);

    return (
        <div>
            {loading ? (<h1 className={styles.loading}>loading...</h1>
            ) : (
                <>
                    <Header />
                    <img src="./images/main-img.png" alt="메인이미지" />
                    <div className={styles.pagew}>
                        <h2 className={styles.title}>인기 컨텐츠</h2>
                        <Swiper
                            loop={true}
                            slidesPerView={5.5}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickacble: 'true',
                            }}
                        >
                            {movies.map(movie =>
                                <SwiperSlide key={movie.id}>
                                    <Movie id={movie.id} title={movie.title} coverImg={movie.medium_cover_image} year={movie.year} className={styles.slide} />
                                </SwiperSlide>)
                            }
                            <FontAwesomeIcon icon="fa-solid fa-angle-left" size='2x' className='swiper-button-prev' />
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" size='2x' className='swiper-button-next' />
                        </Swiper>

                    </div>
                    <div className={styles.pagew}>
                        <h2 className={styles.title}>Drama</h2>
                        <Swiper
                            loop={true}
                            slidesPerView={5.5}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickacble: 'true',
                            }}
                        >
                            {dramas.map(drama =>
                                <SwiperSlide key={drama.id}>
                                    <Drama title={drama.title} coverImg={drama.medium_cover_image} year={drama.year} id={drama.id} />
                                </SwiperSlide>)
                            }
                            <FontAwesomeIcon icon="fa-solid fa-angle-left" size='2x' className='swiper-button-prev' />
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" size='2x' className='swiper-button-next' />
                        </Swiper>
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;