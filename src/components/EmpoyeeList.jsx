import React, { useState } from 'react'
import EmployeeTd from './EmployeeTd.jsx'
import { Button, Card } from 'react-bootstrap'

import CreateEmployeeModal from './AddEmployee.jsx'

export default function EmployeeList(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="text-center">
            <h2 className="m-3">Employee MERN Assignment 2</h2>
            <CreateEmployeeModal onSubmit={props.newEmployeeHandler} show={modalShow} onHide={() => setModalShow(false)} />
            <Card className="table table-dark">
                <Card.Header>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Options</th>
                    </tr>
                </Card.Header>
                <Card.Body>
                    {
                        props.employeeData.map(
                            employee => <EmployeeTd
                                employee={employee}
                                key={employee._id}
                                viewHandler={props.viewHandler}
                                updateHandler={props.updateHandler}
                                deleteHandler={props.deleteHandler} />
                        )
                    }
                </Card.Body>
            </Card>
            <Button variant="primary" className="m-3" onClick={() => setModalShow(true)}>Add Employee</Button>
        </div>
    )
}