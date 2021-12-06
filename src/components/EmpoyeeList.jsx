import React, { useState } from 'react'
import EmployeeTd from './EmployeeTd.jsx'
import Button from 'react-bootstrap/Button'

import CreateEmployeeModal from './AddEmployee.jsx'

export default function EmployeeList(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="text-center">
            <h2 className="m-3">Employee MERN Assignment 2</h2>
            <CreateEmployeeModal onSubmit={props.newEmployeeHandler} show={modalShow} onHide={() => setModalShow(false)} />
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>
            <Button variant="primary" className="m-3" onClick={() => setModalShow(true)}>Add Employee</Button>
        </div>
    )
}