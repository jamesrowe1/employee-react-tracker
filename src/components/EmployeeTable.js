import React, { Component } from 'react';
import "./style.css";
import axios from "axios"
// import EmployeeCard from "./EmployeeCard.js"
export class EmployeeTable extends Component {
    state = {
        sorted: "asc",
        fieldName: "id",
        employees: "",
        base: "",
        tempEmployees: ""
    }
    
    componentWillMount() {
        console.log("test")
        axios
          .get("https://randomuser.me/api/?results=100")
          .then((response) => {
            console.log(response.data.results);
            this.setState({
              employees: response.data.results,
              base: response.data.results,
              tempEmployees: response.data.results
            });
            console.log(this.state.employees)
          })
          .catch((error) => console.warn(error.message));
      }

      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const searchField = document.getElementById("fieldSelect").value;
        const searchVariable = event.target.value;
        // Updating the input's state
        console.log(searchField)
        if (searchField.indexOf(".")===-1) {
            this.setState({
                tempEmployees: this.state.employees.filter(employee => employee[searchField].toLowerCase().includes(searchVariable.toLowerCase()))
              });
        } else {
            const [field, subfield] = searchField.split(".")
            this.setState({tempEmployees: this.state.employees.filter(employee => employee[field][subfield].toLowerCase().includes(searchVariable.toLowerCase()))
        });
        }
        
      };

      sortByField = field => {
        if (field.indexOf(".")===-1){
            if (this.state.fieldName!==field || this.state.sorted==="asc") {
            this.setState({
                tempEmployees: this.state.employees.sort((a, b) => (a[field] > b[field]) ? 1: -1),
                sorted: "desc",
                fieldName: field
            })
            console.log(this.state.tempEmployees)
            } else {
            this.setState({
                tempEmployees: this.state.employees.sort((a, b) => (a[field] < b[field]) ? 1: -1),
                sorted: "asc"
            })
            }
        } else {
            const [fieldoutter, subfield] = field.split(".")
            if (this.state.fieldName!==field || this.state.sorted==="asc") {
                this.setState({
                    tempEmployees: this.state.employees.sort((a, b) => (a[fieldoutter][subfield] > b[fieldoutter][subfield]) ? 1: -1),
                    sorted: "desc",
                    fieldName: field
                })
                console.log(this.state.tempEmployees)
                } else {
                this.setState({
                    tempEmployees: this.state.employees.sort((a, b) => (a[fieldoutter][subfield] < b[fieldoutter][subfield]) ? 1: -1),
                    sorted: "asc"
                })
                }
        }
      }

      render() {
          return (
              <div>
         <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
          />
          <label for="field">Choose a field:</label>
            <select id="fieldSelect" name="fieldSelect">
                <option value="gender">Gender</option>
                <option value="name.first">Name</option>
                <option value="email">Email</option>
                <option value="location.city">location</option>
            </select>
        <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">
              <button className="btn btn-primary" onClick={() => this.sortByField("gender")}>
                Gender
              </button>
            </th>
            <th scope="col">
              <button className="btn btn-primary" onClick={() => this.sortByField("name.first")}>
              Name
              </button>
            </th>
            <th scope="col">
              <button className="btn btn-primary" onClick={() => this.sortByField("image")}>
                Image
              </button>
            </th>
            <th scope="col">
              <button className="btn btn-primary" onClick={() => this.sortByField("email")}>
                Email
              </button>
            </th>
            <th scope="col">
              <button className="btn btn-primary" onClick={() => this.sortByField("location.city")}>
                Location
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
            
          {(this.state.employees.length) ?
            this.state.tempEmployees.map((employee, index) => (
                <tr key={index}>
                <th scope="row">{employee.gender}</th>
                <td>{employee.name.first} {employee.name.last}</td>
                <td><img alt={employee.name} src={employee.picture.thumbnail} /></td>
                <td>{employee.email}</td>
                <td>{employee.location.city}</td>
                </tr>
            )) : <p>Nothing found</p>
          }
        </tbody>
      </table>
      </div>
      )}
}

export default EmployeeTable