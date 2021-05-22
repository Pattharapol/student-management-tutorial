import React, { Component } from "react";

export class AddStudent extends Component {
  state = {
    id: "",
    name: "",
    age: "",
    faculty: "",
  };
  // รองรับการเปลี่ยนแปลงของแต่ละ id
  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  //  Submit Form
  handleSubmit = (e) => {
    if (this.state.id !== "" || this.state.age !== "" || this.state.age !== "" || this.state.faculty !== "") {
      e.preventDefault();
      // console.log(this.state);
      this.props.addStudent(this.state);
      this.setState({
        id: "",
        name: "",
        age: "",
        faculty: "",
      });
    } else {
      alert("Enter Information Please");
    }
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id">Student ID : </label>
          <input
            type="text"
            id="id"
            placeholder="input id"
            onChange={this.handleInputChange}
            value={this.state.id}
          />
          <label htmlFor="name">Student Name : </label>
          <input
            type="text"
            id="name"
            placeholder="input name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label htmlFor="age">Student Age : </label>
          <input
            type="text"
            id="age"
            placeholder="input age"
            onChange={this.handleInputChange}
            value={this.state.age}
          />
          <label htmlFor="faculty">Student Faculty : </label>
          <input
            type="text"
            id="faculty"
            placeholder="input faculty"
            onChange={this.handleInputChange}
            value={this.state.faculty}
          />
          <button className="btn">Add Student</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
