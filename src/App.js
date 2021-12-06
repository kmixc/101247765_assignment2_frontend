import React, { Component } from 'react'
import axios from 'axios'
import Employee from './components/EmpoyeeList'

export default class App extends Component {
  constructor() {
    super()
    this.URL = "https://101247765-assignment2-backend.vercel.app/api/v1/employees"
    this.state = {
      employeeObj: []
    }

  }

  getEmployees = () => {
    fetch(this.URL).then(
      res => res.json()
    ).then(
      employeeObj => this.setState({ employeeObj })
    ).catch((err) =>
      alert("An error has occurred: " + err.toString())
    )
  }

  componentDidMount() {
    this.getEmployees()
  }

  view(event) {
    alert("Viewing " + event.target.value)
  }

  update = (newEmployeeObj) => {
    axios
      .put(this.URL + "/" + newEmployeeObj._id, newEmployeeObj)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    alert("Employee Updated!")
  }

  delete = (event) => {
    axios
      .delete(this.URL + "/" + event.target.value)
      .then(res => {
        alert("Employee Deleted Successfully")
        this.getEmployees()
      })
      .catch(err => alert(err))
  }

  newEmployee = (newEmployeeObj) => {
    axios
      .post(this.URL, newEmployeeObj)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    alert("Employee " + newEmployeeObj.firstName + " created!")

    this.getEmployees()
  }

  render() {
    return (
      <div>
        <Employee employeeObj={this.state.employeeObj}
          view={this.view}
          update={this.update}
          delete={this.delete}
          newEmployee={this.newEmployeeObj} />
      </div>
    );
  }
}
