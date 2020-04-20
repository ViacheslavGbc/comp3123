import React from 'react';

const Student = ({match}) => {

    const { studentname } = match.params;
    var { studentno } = match.params;
    studentno === undefined? studentno="":studentno=`The student no is ${studentno}`;

    return (
        <div>
            <p>Student</p>
            <div>
                <div>{`The student name is "${studentname}"!`}</div>
                <div>{`${studentno}`}</div>
            </div>
        </div>
      );
};
 
export default Student;