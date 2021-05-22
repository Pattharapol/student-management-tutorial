import React, { Component } from "react";
import AddStudent from "./components/AddStudent";
import Students from "./components/Students";

class App extends Component {
  state = {
    students: [
      {
        id: "61322420115",
        name: "Pattharapol Lakboon",
        age: "35",
        faculty: "Computer Science",
      },
    ],
  };

  addStudent = (student) => {
    // console.log(student);
    this.setState({
      students: [...this.state.students, student],
    });
  };

  deleteStudent = (id) => {
    console.log(id);
    //
    let students = this.state.students.filter((student) => {
      return student.id !== id;
    });
    this.setState({
      students,
    });
  };

  render() {
    return (
      <div className="container center">
        <h1 className="blue-text">Student Management</h1>
        <AddStudent
          addStudent={this.addStudent}
          deleteStudent={this.deleteStudent}
        />
        <Students students={this.state.students} />
      </div>
    );
  }
}

export default App;
