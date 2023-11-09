import React, { useState, useEffect } from "react";
import { productosCocina } from "../assets/js/equipment.items";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// Import scss
import "../SCSS/EquipmentFilter.scss";

const FiltroEquipo = () => {
  // estados iniciales usando useState
  const [datosFiltrados, setDatosFiltrados] = useState(productosCocina);
  const [filtroSeleccionado, setFiltroSeleccionado] = useState("todos");

  // Cuando el componente se monta, establecemos la lista de productos sin filtrar como datos iniciales.
  useEffect(() => {
    setDatosFiltrados(productosCocina);
    // console.log(
    //   "%cLos datos filtrados del Objeto productosCocina",
    //   "color: blue",
    //   datosFiltrados
    // );
  }, []);

  // handleFilter se llama cuando se hace clic en un botón de filtro
  const handleFilter = (filtro) => {
    // Si el filtro seleccionado es "todos", muestra todos los productos sin filtrar
    if (filtro === "todos") {
      setDatosFiltrados(productosCocina);
    } else {
      // Compara el nombre y la descripción del producto con el filtro proporcionado
      const productosFiltrados = productosCocina.filter((producto) => {
        const nombre = producto.nombre.toLowerCase();
        const descripcion = producto.descripcion.toLowerCase();
        return nombre.includes(filtro) || descripcion.includes(filtro);
      });

      // Establece los datos filtrados en los productos filtrados
      setDatosFiltrados(productosFiltrados);
    }

    // Actualiza el filtro seleccionado
    setFiltroSeleccionado(filtro);
  };

  return (
    <div className="equipment__container mt-4">
      <h1 className="text-center">
        EXPLORE ALL YOUR
        <span style={{ color: "#00b3ff" }}> KITCHEN OPTIONS</span>
      </h1>

      <Swiper
        navigation={true}
        slidesPerView={4}
        grid={{
          rows: 1,
        }}
        modules={[Grid, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper__item">
          <button
            onClick={() => handleFilter("todos")}
            className={`button__filter ${
              filtroSeleccionado === "todos" ? "active" : ""
            }`}
          >
            ALL
          </button>
        </SwiperSlide>

        <SwiperSlide className="swiper__item">
          <button
            onClick={() => handleFilter("batidora")}
            className={`button__filter ${
              filtroSeleccionado === "batidora" ? "active" : ""
            }`}
          >
            Batidoras
          </button>
        </SwiperSlide>

        <SwiperSlide className="swiper__item">
          <button
            onClick={() => handleFilter("olla")}
            className={` button__filter ${
              filtroSeleccionado === "olla" ? "active" : ""
            }`}
          >
            Ollas
          </button>
        </SwiperSlide>

        <SwiperSlide className="swiper__item">
          <button className={"button__filter"}>MORE BUTTONS</button>
        </SwiperSlide>

        <SwiperSlide className="swiper__item">
          <button className={"button__filter"}>MORE BUTTONS</button>
        </SwiperSlide>
      </Swiper>

      <div className="list">
        {datosFiltrados.map((producto) => (
          <div className="list__filter" key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const EquipmentFilter = () => {
  return <FiltroEquipo />;
};

export default EquipmentFilter;
