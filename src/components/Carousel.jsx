// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import Swiper local styles
import "../SCSS/Carousel.scss";

// import required modules
import { Grid, Autoplay, Navigation } from "swiper/modules";

export const Carousel = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        modules={[Grid, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper__item">
          <span> IMAGEN 1 </span>
          <span> COMENT 1</span>
        </SwiperSlide>

        <SwiperSlide className="swiper__item">
          <span> IMAGEN 2</span>
          <span> COMENT 2</span>
        </SwiperSlide>

        <SwiperSlide className="swiper__item">
          <span> IMAGEN 3</span>
          <span> COMENT 3</span>
        </SwiperSlide>

        <SwiperSlide className="swiper__item">
          <span> IMAGEN 4</span>
          <span> COMENT 4</span>
        </SwiperSlide>

        <SwiperSlide className="swiper__item">
          <span> IMAGEN 5</span>
          <span> COMENT 5</span>
        </SwiperSlide>

        <SwiperSlide className="swiper__item">
          <span> IMAGEN 6</span>
          <span> COMENT 6</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
