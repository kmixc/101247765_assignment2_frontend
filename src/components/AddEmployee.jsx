import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function CreateEmployeeModal(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Title className="text-center">
                Add
            </Modal.Title>
            <Modal.Body>
                <Form.Group className="mb-2">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control onChange={(e) => setFirstName(e.target.value)} name="firstName" type="text" placeholder="firstname" />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control onChange={(e) => setLastName(e.target.value)} name="lastName" type="text" placeholder="lastname" />
                </Form.Group>
                <Button className="m-1 btn-success" type="submit" onClick={() => props.onSubmit({ firstName, lastName })}>Add Employee</Button>
                <Button className="m-1 btn-danger" onClick={props.onHide}>Close</Button>
            </Modal.Body>
        </Modal>
    )
}