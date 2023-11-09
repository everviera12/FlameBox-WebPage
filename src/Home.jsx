import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { Card } from "react-bootstrap";

import {Carousel} from "./components/Carousel";
import { Form } from "./components/Form";

import "./SCSS/Home.scss";

export const Home = () => {
  return (
    <>
      <div className="section__video">
        <div className="container main__container">
          <h1>THE WAY TO START YOUR BUSINESS</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            accusamus assumenda consectetur odio veritatis! Sequi optio aperiam
            iste dolorem neque harum reiciendis, veniam quibusdam voluptatum
            similique est non illum esse.
          </span>
          <a href="/more-info">
            <button className="btn btn-primary">MORE INFO</button>
          </a>
        </div>
      </div>

      <div className="aboutus d-flex">
        <div className="container aboutus__container  ">
          <h2>
            Why choose a <span className="text__flamebox"> Flamebox </span>
            trailer?
          </h2>

          <div className="d-flex row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-around gap-3">
            <Card
              className="card border-0 bg-transparent"
              border="white"
              style={{ width: "18rem" }}
            >
              <Card.Header className="bg-transparent">
                <FontAwesomeIcon icon={faFileCircleCheck} className="icon" />
              </Card.Header>
              <Card.Body>
                <Card.Title>Quality</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="card border-0 bg-transparent"
              border="white"
              style={{ width: "18rem" }}
            >
              <Card.Header className="bg-transparent">
                <FontAwesomeIcon icon={faFileCircleCheck} className="icon" />
              </Card.Header>
              <Card.Body>
                <Card.Title>Integrity</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="card border-0 bg-transparent"
              border="white"
              style={{ width: "18rem" }}
            >
              <Card.Header className="bg-transparent">
                <FontAwesomeIcon icon={faFileCircleCheck} className="icon" />
              </Card.Header>
              <Card.Body>
                <Card.Title>Agility</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <div className="text__info ">
              <h2>FLAME BOX</h2>
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat
              </span>

              <div className="counter">
                <div className="sold__trailers">
                  <h3>80</h3>
                  <span>SOLID TRAILERS</span>
                </div>

                <div className="codes__aproved">
                  <h3>120</h3>
                  <span>COUNTY CODES APROVED</span>
                </div>

                <div className="delivery__trailer">
                  <h3>90</h3>
                  <span>DELIVERY TRAILERS</span>
                </div>
              </div>
            </div>

            <div className="img__trailer">
              <img
                src="https://prestigefoodtrucks.com/wp-content/uploads/2022/01/joana-godinho-Gwv-t9VQiPM-unsplash-facebook.jpg"
                alt="trailer example"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="services d-flex">
        <div className="container services__container">
          <div className="cards__info">
            <div className="trailer">
              <img
                src="../src/assets/img/trailer-blanco.png"
                alt="img flamebox"
              />
            </div>

            <div className="services__container d-flex mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-around">
              <div className="service d-flex flex-column gap-5 text-center">
                <span className="number">1</span>
                <span className="text__service">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                </span>
              </div>

              <div className="service d-flex flex-column gap-5 text-center">
                <span className="number">2</span>
                <span className="text__service">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                </span>
              </div>

              <div className="service d-flex flex-column gap-5 text-center">
                <span className="number">3</span>
                <span className="text__service">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                </span>
              </div>
            </div>

            <a
              href="/food-trailers"
              className="d-flex justify-content-center btn mt-5"
            >
              <button className="button__trailers border-0 btn btn-info">
                CHECK ALL TRAILERS
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery__grid">
          <div className="large-image">
            <img src="https://cdn.pixabay.com/photo/2023/10/25/07/29/woman-8339755_1280.jpg" />
          </div>

          <div className="small-image">
            <img src="https://cdn.pixabay.com/photo/2023/09/14/19/14/landscape-8253576_1280.jpg" />
          </div>

          <div className="small-image">
            <img src="https://cdn.pixabay.com/photo/2023/10/20/13/48/tamarin-8329530_1280.png" />
          </div>

          <div className="small-image">
            <img src="https://cdn.pixabay.com/photo/2023/10/27/09/24/mountains-8344601_1280.jpg" />
          </div>

          <div className="small-image">
            <img src="https://cdn.pixabay.com/photo/2023/11/01/11/13/path-8357174_1280.jpg" />
          </div>

          <div className="small-image">
            <img src="https://cdn.pixabay.com/photo/2023/04/16/11/23/bridge-7929999_1280.jpg" />
          </div>

          <div className="small-image">
            <img src="https://cdn.pixabay.com/photo/2019/10/27/18/48/bridge-4582501_1280.jpg" />
          </div>
        </div>
      </div>

      <div className="team">
        <div className="container team__container d-flex">
          <div className="info">
            <h2>You’re not alone in this journey</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod
            </span>
          </div>

          <div className="team__pictures mt-3 mb-3">
            <img
              className="img__team"
              src="http://placekitten.com/g/250/"
              alt="Kitten 1"
            />
            <img
              className="img__team"
              src="http://placekitten.com/g/250/"
              alt="Kitten 1"
            />
            <img
              className="img__team"
              src="http://placekitten.com/g/250/"
              alt="Kitten 1"
            />
            <img
              className="img__team"
              src="http://placekitten.com/g/250/"
              alt="Kitten 1"
            />
            <img
              className="img__team"
              src="http://placekitten.com/g/250/"
              alt="Kitten 1"
            />
            <img
              className="img__team"
              src="http://placekitten.com/g/250/"
              alt="Kitten 1"
            />
          </div>
        </div>
      </div>

      <div className="map d-flex">
        <div className="container map__container d-flex flex-column justify-content-center text-center ">
          <span>WORKING TO BE NEAR YOU</span>
          <div className="img__container d-flex justify-content-center">
            <img
              src="https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22.jpg"
              alt="img map"
            />
          </div>
        </div>
      </div>

      <div className="review d-flex">
        <div className=" container review__container">
          <Carousel />
        </div>
      </div>

      <div className="form d-flex ">
        <div className="container form__container">
          <Form />
        </div>
      </div>
    </>
  );
};

// export const Home = () => {
//   return (
//     <>
//       <SectionVideo />
//       <AboutUs />
//       <Services />
//       <Gallery />
//     </>
//   );
// };
