import { useState, useEffect } from "react";
import { equipmentTrailer } from "../assets/js/equipment.option";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// styles scss
import "../SCSS/TrailerFilter.scss";

const Filter = () => {
  const [filterTrailer, setFilterTrailer] = useState(equipmentTrailer);
  const [selectedTrailer, setSelectedTrailer] = useState("trailer-1");

  useEffect(() => {
    const trailerFilter = equipmentTrailer.filter((trailer) => {
      const equipment = trailer.trailer.toLowerCase();
      const image = trailer.trailer.toLowerCase();
      return (
        equipment.includes(selectedTrailer) || image.includes(selectedTrailer)
      );
    });

    // debug
    // console.log(
    //   "%cElementos del Array completos: \n",
    //   "color:lightblue",
    //   equipmentTrailer
    // );

    // console.log(
    //   "%cElementos del Array seleccionado: \n",
    //   "color:lightgreen",
    //   trailerFilter
    // );

    setFilterTrailer(trailerFilter);
  }, [selectedTrailer]); // Agrega selectedTrailer como dependencia

  const handleFilter = (filter) => {
    // console.log(filter);
    setSelectedTrailer(filter);
  };

  return (
    <div className="container__filter">
      <div className=" d-flex flex-column mt-4 mb-5 gap-4">
        <h2>Need Help?</h2>
        <span>Let's make the perfect match for your trailer.</span>

        <div className="buttons__container">
          <Swiper
            navigation={true}
            slidesPerView={3}
            spaceBetween={-40}
            grid={{
              rows: 1,
            }}
            modules={[Grid, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper__item">
              <button
                onClick={() => handleFilter("trailer-1")}
                className={`button__filter ${
                  selectedTrailer === "trailer-1" ? "active" : ""
                }`}
              >
                TRAILER 1
              </button>
            </SwiperSlide>

            <SwiperSlide className="swiper__item">
              <button
                onClick={() => handleFilter("trailer-2")}
                className={`button__filter ${
                  selectedTrailer === "trailer-2" ? "active" : ""
                }`}
              >
                TRAILER 2
              </button>
            </SwiperSlide>

            <SwiperSlide className="swiper__item">
              <button
                onClick={() => handleFilter("trailer-3")}
                className={`button__filter ${
                  selectedTrailer === "trailer-3" ? "active" : ""
                }`}
              >
                TRAILER 3
              </button>
            </SwiperSlide>

            <SwiperSlide className="swiper__item">
              <button
                onClick={() => handleFilter("trailer-4")}
                className={`button__filter ${
                  selectedTrailer === "trailer-4" ? "active" : ""
                }`}
              >
                TRAILER 4
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="array__equipment mb-2">
        <span>WE RECOMMEND YOU</span>
        <br />
        {filterTrailer.map((trailer) => (
          <span key={trailer.id}> {trailer.equipment}</span>
        ))}
      </div>

      <div className="img__container mb-4">
        {filterTrailer.map((trailer) => (
          <img key={trailer.id} src={trailer.image} />
        ))}
      </div>
    </div>
  );
};

const TrailerFilter = () => {
  return (
    <>
      <Filter />
    </>
  );
};

export default TrailerFilter;
