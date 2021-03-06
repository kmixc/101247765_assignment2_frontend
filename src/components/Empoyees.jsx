import React, { useState } from 'react'
import EmployeeTd from './EmployeeCard.jsx'
import { Button, Container } from 'react-bootstrap'

import AddEmployee from './AddEmployee.jsx'

export default function EmployeeList(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="text-center">
            <h2 className="m-2">Employee MERN Assignment 2</h2>
            <AddEmployee onSubmit={props.newEmployeeHandler} show={modalShow} onHide={() => setModalShow(false)} />
            <Container className="text-dark">
                {
                    props.employeeOBJ.map(
                        employee => <EmployeeTd
                            employee={employee}
                            key={employee._id}
                            viewHandler={props.viewHandler}
                            updateHandler={props.updateHandler}
                            deleteHandler={props.deleteHandler} />
                    )
                }
            </Container>
            <Button className="m-3 btn btn-success" onClick={() => setModalShow(true)}>Add Employee</Button>
        </div>
    )
}