import React from 'react';
import './App.css';
import EmployeeCard from "./components/EmployeeCard.js"
import jedi from "./jedi.json"

class App extends React.Component {

  state = {
    jedi,
    sorted: "asc",
    fieldName: "id",
    viewableJedi: jedi
  }

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
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">View all the employees!</p>
        </div>
        <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
          />
          <label for="field">Choose a field:</label>
            <select id="fieldSelect" name="fieldSelect">
              {/* <option value="id">Id</option> */}
              <option value="name">Name</option>
              <option value="occupation">Occupation</option>
              <option value="originated">Originated</option>
            </select>
      </div>
      <table className="table table-dark">
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
          {this.state.viewableJedi.map(oneJedi => (
            <EmployeeCard 
              id={oneJedi.id}
              name={oneJedi.name}
              image={oneJedi.image}
              occupation={oneJedi.occupation}
              originated={oneJedi.originated}
            />
          ))} 
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;
