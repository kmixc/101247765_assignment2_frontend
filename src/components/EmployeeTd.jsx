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
                <td>{props.employee._id}</td>
                <td><input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></td>
                <td><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /></td>
                <td>
                    <button className="btn btn-success" value={props.employee._id} onClick={sendUpdate}>Update</button>
                </td>
            </Card>
        )
    } else {
        return (
            <Card>
                <Card.Title>{props.employee._id}</Card.Title>
                <Card.Text>{firstName}</Card.Text>
                <Card.Text>{lastName}</Card.Text>
                <Card.Footer>
                    <ViewEmployeeModal employee={props.employee} show={modalShow} onHide={() => setModalShow(false)} />
                    <button className="btn btn-primary m-1" value={props.employee._id} onClick={() => setModalShow(true)}>View</button>
                    <button className="btn btn-success m-1" value={props.employee._id} onClick={updateHandler}>Update</button>
                    <button className="btn btn-danger m-1" value={props.employee._id} onClick={props.deleteHandler}>Delete</button>
                </Card.Footer>
            </Card>
        )
    }
}