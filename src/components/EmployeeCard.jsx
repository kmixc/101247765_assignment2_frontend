import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import ViewEmployeeModal from './ViewEmployeeModal'

export default function EmployeeRow(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstName] = useState(props.employee.firstName)
    const [lastName, setLastName] = useState(props.employee.lastName)

    const [modalShow, setModalShow] = React.useState(false);


    const updateHandler = () => {
        setIsEditing(true)
    }

    const sendUpdate = () => {
        setIsEditing(false)
        props.updateHandler({ _id: props.employee._id, firstName, lastName })
    }

    if (isEditing) {
        return (
            <Card>
                <Card.Title>ID: {props.employee._id}</Card.Title>
                <Card.Text className="text-center"><input className="form-control p-4 w-50" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></Card.Text>
                <Card.Text className="text-center"><input className="form-control p-4 w-50" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /></Card.Text>
                <Card.Footer>
                    <button className="btn btn-success" value={props.employee._id} onClick={sendUpdate}>Update</button>
                </Card.Footer>
            </Card>
        )
    } else {
        return (
            <Card className="m-5">
                <Card.Title className="pt-2">ID: {props.employee._id}</Card.Title>
                <Card.Text>First Name: {firstName}</Card.Text>
                <Card.Text>Last Name: {lastName}</Card.Text>
                <Card.Footer>
                    <ViewEmployeeModal employee={props.employee} show={modalShow} onHide={() => setModalShow(false)} />
                    <button className="btn btn-secondary m-1" value={props.employee._id} onClick={() => setModalShow(true)}>View</button>
                    <button className="btn btn-info m-1" value={props.employee._id} onClick={updateHandler}>Update</button>
                    <button className="btn btn-danger m-1" value={props.employee._id} onClick={props.deleteHandler}>Delete</button>
                </Card.Footer>
            </Card>
        )
    }
}