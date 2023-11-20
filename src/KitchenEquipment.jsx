// components
import TrailerFilter from "./components/TrailerFilter";
import EquipmentFilter from "./components/EquipmentFilter";
import { Form } from "./components/Form";

// styles
import "./SCSS/KitchenEquipment.scss";

// toma el ID del elemento como argumento.
const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId); //tomamos el elemento ID del documento
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export const KitchenEquipment = () => {
  return (
    <>
      <div className="select__equipment d-flex">
        <div className="select__equipment__container container d-flex flex-column text-center">
          <h1>ALL YOU NEED IS THE PERFECT KITCHEN</h1>

          <div className="buttons mt-4">
            <button
              className="btn btn-primary p-2"
              onClick={() => scrollToElement("equipmentTrailers")}
            >
              CHECK ALL EQUIPMENT
            </button>
            <button
              className="btn btn-outline-primary text-white p-2"
              onClick={() => scrollToElement("equipmentFilter")}
            >
              HELP ME TO SET MY KITCHEN
            </button>
          </div>
        </div>
      </div>

      <div className="kitchen__equipment d-flex">
        <div className="kitchen__equipment__container container mt-5 mb-5">
          <h3>Set your kitchen with everything you need</h3>
          <span>Check all Flamebox’s Comercial Equipment</span>

          <div className="items d-flex gap-4 mt-5">
            <div className="img__container">
              <img
                src="https://foly.com.mx/cdn/shop/products/linea-blanca-refrigeradores-refris-refri-refrigerador-25p3-gris-ge-sku-04-RF-3102-foly-muebles-foto-1.jpg?v=1618611067"
                alt="kitchen item"
              />
            </div>

            <div className="img__container">
              <img
                src="https://foly.com.mx/cdn/shop/products/linea-blanca-refrigeradores-refris-refri-refrigerador-25p3-gris-ge-sku-04-RF-3102-foly-muebles-foto-1.jpg?v=1618611067"
                alt="kitchen item"
              />
            </div>

            <div className="img__container">
              <img
                src="https://foly.com.mx/cdn/shop/products/linea-blanca-refrigeradores-refris-refri-refrigerador-25p3-gris-ge-sku-04-RF-3102-foly-muebles-foto-1.jpg?v=1618611067"
                alt="kitchen item"
              />
            </div>

            <div className="img__container">
              <img
                src="https://foly.com.mx/cdn/shop/products/linea-blanca-refrigeradores-refris-refri-refrigerador-25p3-gris-ge-sku-04-RF-3102-foly-muebles-foto-1.jpg?v=1618611067"
                alt="kitchen item"
              />
            </div>

            <div className="img__container">
              <img
                src="https://foly.com.mx/cdn/shop/products/linea-blanca-refrigeradores-refris-refri-refrigerador-25p3-gris-ge-sku-04-RF-3102-foly-muebles-foto-1.jpg?v=1618611067"
                alt="kitchen item"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="trailer__filter d-flex" id="equipmentFilter">
        <div className="container trailer__filter__container">
          <TrailerFilter />
        </div>
      </div>

      <div
        className="equipment__filter d-flex flex-column"
        id="equipmentTrailers"
      >
        <div className="container equipment__filter__container">
          <EquipmentFilter />
        </div>

        <div className="kitchen__equipment__form d-flex">
          <div className="container form__container">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};
