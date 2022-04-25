import React from 'react';
import styles from './slide.module.css';
import { useEffect, useState } from 'react';
import Loading from './loading';
import Movie from './movie';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Slide({ ytsApi }) {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(ytsApi)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? <Loading /> :
                <div className={styles.container}>
                    <Swiper
                        loop={true}
                        slidesPerView={5.5}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: 'true',
                        }}
                    >
                        {movies.map(movie =>
                            <SwiperSlide>
                                <Movie
                                    title={movie.title}
                                    coverImg={movie.medium_cover_image}
                                    year={movie.year}
                                    id={movie.id}
                                />
                            </SwiperSlide>
                        )}
                        <FontAwesomeIcon icon="fa-solid fa-angle-left" size='2x' className='swiper-button-prev' />
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" size='2x' className='swiper-button-next' />
                    </Swiper>
                </div>
            }
        </div >
    );
}

export default Slide;