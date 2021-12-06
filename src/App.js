import React, { Component } from 'react'
import axios from 'axios'
import Employees from './components/Empoyees'

export default class App extends Component {
  constructor() {
    super()
    this.URL = "https://101247765-assignment2-backend.vercel.app/api/v1/employees"
    this.state = {
      employeeOBJ: []
    }

  }

  getEmployees = () => {
    fetch(this.URL).then(
      res => res.json()
    ).then(
      employeeOBJ => this.setState({ employeeOBJ })
    ).catch((err) =>
      alert("An error has occurred: " + err.toString())
    )
  }

  componentDidMount() {
    this.getEmployees()
  }

  update = (newEmployeeObj) => {
    axios
      .put(this.URL + "/" + newEmployeeObj._id, newEmployeeObj)
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }

  delete = (event) => {
    axios
      .delete(this.URL + "/" + event.target.value)
      .then(res => {
        this.getEmployees()
      })
      .catch(err => alert(err))
  }

  newEmployee = (newEmployeeObj) => {
    axios
      .post(this.URL, newEmployeeObj)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    this.getEmployees()
  }

  render() {
    return (
      <div>
        <Employees employeeOBJ={this.state.employeeOBJ}
          viewHandler={this.handleClickView}
          updateHandler={this.update}
          deleteHandler={this.delete}
          newEmployeeHandler={this.newEmployee} />
      </div>
    )
  }
}