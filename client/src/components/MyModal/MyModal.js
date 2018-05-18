import React from "react";
import { Modal, Button } from "react-bootstrap";

const myModal = props =>

    <Modal show={props.show} onHide={props.hide}>
        <Modal.Header>
        <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.text}
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.hide}>Close</Button>
        </Modal.Footer>
    </Modal>

export default myModal;