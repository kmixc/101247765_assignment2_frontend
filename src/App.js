import React, { Component } from 'react'
import axios from 'axios'
import Employee from './components/EmpoyeeList'

export default class App extends Component {
  constructor() {
    super()
    this.URL = "https://101247765-assignment2-backend.vercel.app/api/v1/employees"
    this.state = {
      employeeOBJ: []
    }

  }

  fetchEmployees = () => {
    fetch(this.URL).then(
      res => res.json()
    ).then(
      employeeOBJ => this.setState({ employeeOBJ })
    ).catch((err) =>
      alert("An error has occurred: " + err.toString())
    )
  }

  componentDidMount() {
    this.fetchEmployees()
  }

  handleClickUpdate = (newEmployeeObj) => {
    axios
      .put(this.URL + "/" + newEmployeeObj._id, newEmployeeObj)
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }

  handleClickDelete = (event) => {
    axios
      .delete(this.URL + "/" + event.target.value)
      .then(res => {
        this.fetchEmployees()
      })
      .catch(err => alert(err))
  }

  handleCreateNewEmployee = (newEmployeeObj) => {
    axios
      .post(this.URL, newEmployeeObj)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    this.fetchEmployees()
  }

  render() {
    return (
      <div>
        <Employee employeeOBJ={this.state.employeeOBJ}
          viewHandler={this.handleClickView}
          updateHandler={this.handleClickUpdate}
          deleteHandler={this.handleClickDelete}
          newEmployeeHandler={this.handleCreateNewEmployee} />
      </div>
    )
  }
}