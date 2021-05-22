import React from "react";

const Students = ({ students , deleteStudent}) => {
  // const {id, name, age, faculty} = props;
  const studentsList = students.map((student) => {
    return (
      <div className="card" key={student.id}>
        <div>ID : {student.id}</div>
        <div>name : {student.name}</div>
        <div>age : {student.age}</div>
        <div>faculty : {student.faculty}</div>
        <button className="btn red darken-1" onClick={()=>deleteStudent(student.id)}>Delete</button>
      </div>
    );
  });
  return <div>{studentsList}</div>;
};

export default Students;
