import React, { useState } from 'react'
import ViewEmployeeModal from './ViewEmployeeModal'

export default function EmployeeRow(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstName] = useState(props.employee.firstName)
    const [lastName, setLastName] = useState(props.employee.lastName)

    const [modalShow, setModalShow] = React.useState(false);


    const update = () => {
        setIsEditing(true)
    }

    const updated = () => {
        setIsEditing(false)
        props.update({ _id: props.employee._id, firstName, lastName })
    }

    if (isEditing) {
        return (
            <tr>
                <td>{props.employee._id}</td>
                <td><input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></td>
                <td><input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} /></td>
                <td>
                    <button className="btn btn-success" value={props.employee._id} onClick={updated}>Update</button>
                </td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{props.employee._id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>
                    <ViewEmployeeModal employee={props.employee} show={modalShow} onHide={() => setModalShow(false)} />
                    <button className="btn btn-primary m-1" value={props.employee._id} onClick={() => setModalShow(true)}>View</button>
                    <button className="btn btn-success m-1" value={props.employee._id} onClick={update}>Update</button>
                    <button className="btn btn-danger m-1" value={props.employee._id} onClick={props.delete}>Delete</button>
                </td>
            </tr>
        )
    }
}