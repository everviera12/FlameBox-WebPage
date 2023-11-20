import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export function ModalForm() {
  // modal js
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        CONTACT US
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title> CONTACT US</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formFullName">
              <Form.Label className="text-dark">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full name"
                name="fullName"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className="text-dark mt-2">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example: yourName@gmail.com"
                name="email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label className="text-dark mt-3">Phone number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="add code area"
                name="phone"
                required
              />
            </Form.Group>

            <Form.Group controlId="formSection">
              <Form.Label className="text-dark mt-3">
                I am interested in
              </Form.Label>
              <Form.Select required>
                <option value="Chose size" disabled selected>
                  Chose size
                </option>
                <option value="10ft Trailer">10ft Trailer</option>
                <option value="12ft Trailer">12ft Trailer</option>
                <option value="14ft Trailer">14ft Trailer</option>
                <option value="16ft Trailer">16ft Trailer</option>
                <option value="20ft Trailer">20ft Trailer</option>
                <option value="23ft Trailer">23ft Trailer</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formTextarea">
              <Form.Label className="text-dark mt-3">Texto</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Texto"
                name="textarea"
                required
              />
            </Form.Group>

            <Button className="mt-4" variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
