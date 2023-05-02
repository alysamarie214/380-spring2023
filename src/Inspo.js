import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Inspo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id ="canvas-button" variant="primary" onClick={handleShow}>
        INSPIRATION
      </Button>

      <Offcanvas id = "canvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id = "canvas-title">INSPIRATION</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img src="https://i.pinimg.com/564x/e6/63/90/e66390aee5c11cee212efd4c41aa909c.jpg" alt="inspo1" width = "200px" />
          <img class = "float-right" src="https://i.pinimg.com/564x/99/ee/df/99eedf1d953983073139ecabf665fdc0.jpg" alt="inspo2" width = "200px"/>
          <img class = "" src="https://i.pinimg.com/564x/2f/b3/73/2fb373825ad3ff81428db30346bce0a7.jpg" alt="inspo2" width = "200px"/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Inspo;