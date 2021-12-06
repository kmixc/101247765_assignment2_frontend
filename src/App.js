import React, { Component } from 'react'
import axios from 'axios'
import Employee from './components/EmpoyeeList'

export default class App extends Component {
  constructor() {
    super()
    this.URL = "https://101247765-assignment2-backend.vercel.app/api/v1/employees"
    this.state = {
      employeeData: []
    }

  }

  fetchEmployees = () => {
    fetch(this.BACKEND_URL).then(
      res => res.json()
    ).then(
      employeeData => this.setState({ employeeData })
    ).catch((err) =>
      alert("An error has occurred: " + err.toString())
    )
  }

  componentDidMount() {
    this.fetchEmployees()
  }

  handleClickView(event) {
    alert("Viewing " + event.target.value)
  }

  handleClickUpdate = (newEmployeeObj) => {
    axios
      .put(this.BACKEND_URL + "/" + newEmployeeObj._id, newEmployeeObj)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    alert("Employee Updated!")
  }

  handleClickDelete = (event) => {
    axios
      .delete(this.BACKEND_URL + "/" + event.target.value)
      .then(res => {
        alert("Employee Deleted Successfully")
        this.fetchEmployees()
      })
      .catch(err => alert(err))
  }

  handleCreateNewEmployee = (newEmployeeObj) => {
    axios
      .post(this.BACKEND_URL, newEmployeeObj)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    alert("Employee " + newEmployeeObj.firstName + " created!")

    this.fetchEmployees()
  }

  render() {
    return (
      <div>
        <Employee employeeData={this.state.employeeData}
          viewHandler={this.handleClickView}
          updateHandler={this.handleClickUpdate}
          deleteHandler={this.handleClickDelete}
          newEmployeeHandler={this.handleCreateNewEmployee} />
      </div>
    )
  }
}