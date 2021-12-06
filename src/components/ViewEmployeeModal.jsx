import React from 'react'
import { Container, Card } from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function ViewEmployeeModal(props) {

    return (
        <Card
            {...props}
            aria-labelledby="contained-Card-title-vcenter"
            centered
        >
            <Card.Header>
                <Card.Title id="contained-Card-title-vcenter">
                    View Employee
                </Card.Title>
            </Card.Header>
            <Card.Body>
                ID: <b>{props.employee._id}</b><br />
                First Name: <b>{props.employee.firstName}</b><br />
                Last Name: <b>{props.employee.lastName}</b>
            </Card.Body>
            <Card.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Card.Footer>
        </Card>
    )
}