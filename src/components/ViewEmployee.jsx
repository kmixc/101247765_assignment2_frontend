import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function ViewEmployeeModal(props) {

    return (
        <Modal
            {...props}>
            <Modal.Title id="contained-modal-title-vcenter">
                View
            </Modal.Title>
            <Modal.Body className="text-center">
                ID: {props.employee._id}<br />
                First Name: {props.employee.firstName}<br />
                Last Name: {props.employee.lastName}
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}