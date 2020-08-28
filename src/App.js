import React, { Component } from "react";
import './App.css';
// import EmployeeCard from "./components/EmployeeCard.js"
import EmployeeTable from "./components/EmployeeTable.js"
// import jedi from "./jedi.json"
// import API from "./utils/API";
// import axios from "axios"
class App extends Component {

  
  
  // componentDidMount() {
  //   axios
  //     .get("https://randomuser.me/api/?results=100")
  //     .then((response) => {
  //       console.log(response.data.results);
  //       this.setState({
  //         employees: response.data.results,
  //         base: response.data.results,
  //       });
  //       console.log(this.state)
  //     })
  //     .catch((error) => console.warn(error.message));
  // }



  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const searchField = document.getElementById("fieldSelect").value;
    const searchVariable = event.target.value;
    // Updating the input's state
    this.setState({
      viewableJedi: this.state.jedi.filter(oneJedi => oneJedi[searchField].toLowerCase().includes(searchVariable.toLowerCase()))
    });
  };

  sortByField = field => {
    if (this.state.fieldName!==field) {
      this.setState({
        jedi: this.state.jedi.sort((a, b) => (a[field] > b[field]) ? 1: -1),
        sorted: "desc",
        fieldName: field
      })
      console.log(this.state.jedi)
    } else {
      this.setState({
        jedi: this.state.jedi.sort((a, b) => (a[field] < b[field]) ? 1: -1),
        sorted: "asc"
      })
    }
  }

  render() {
    
    
    return (
      
    <div>
      {console.log(this.state)}
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">View all the employees!</p>
        </div>
        
      </div>
      <EmployeeTable />
      {/* <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">
              <button className="btn btn-primary" onClick={() => this.sortByField("id")}>
                id
              </button>
            </th>
            <th scope="col">
              <button className="btn btn-primary" onClick={() => this.sortByField("name")}>
              Name
              </button>
            </th>
            <th scope="col">
              <button className="btn btn-primary" onClick={() => this.sortByField("image")}>
                Image
              </button>
            </th>
            <th scope="col">
              <button className="btn btn-primary" onClick={() => this.sortByField("occupation")}>
                Occupation
              </button>
            </th>
            <th scope="col">
              <button className="btn btn-primary" onClick={() => this.sortByField("originated")}>
                Originated
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(employee => (
            <EmployeeCard 
              gender={employee.gender}
              name={employee.name.first}
              image={employee.picture.thumbnail}
              location={employee.location}
              email={employee.email}
            />
          ))} 
        </tbody>
      </table> */}
      </div>
    );
  }
}

export default App;
