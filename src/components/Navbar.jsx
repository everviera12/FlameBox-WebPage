// react bootstrap nav
import { Container, Nav, Navbar } from "react-bootstrap";
// react router
import { Route, Link, Routes } from "react-router-dom";
// modal
import {ModalForm} from "./ModalForm";

// components
import { Home } from "../Home";
import { KitchenEquipment } from "../KitchenEquipment";

// styles css
import "../SCSS/Navbar.scss";

function Navegation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="w-100 position-absolute nav__container z-1"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="nav__link">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border-0 bg-white "
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav__container justify-content-end text-center w-100 align-items-center">
              <Nav.Link as={Link} to="/" className="nav__link">
                HOME
              </Nav.Link>

              <Nav.Link as={Link} to="/food-trailers" className="nav__link">
                FOOD TRAILERS
              </Nav.Link>

              <Nav.Link as={Link} to="/kitchen-equipment" className="nav__link">
                KITCHEN EQUIPMENT
              </Nav.Link>

              <Nav.Link as={Link} to="/services" className="nav__link">
                SERVICES
              </Nav.Link>

              <Nav.Link as={Link} to="/testimonials" className="nav__link">
                TESTIMONIALS
              </Nav.Link>

              <Nav.Link as={Link} to="/financing" className="nav__link">
                FINANCING
              </Nav.Link>

              <Nav.Link className="nav__link">
                <ModalForm />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchen-equipment" element={<KitchenEquipment />} />
      </Routes>
    </>
  );
}

export default Navegation;
