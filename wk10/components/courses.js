import React from 'react';

const Course = (props) => {
    var outCourse = []

    for (var i = 0; i < props.courseNumber; i++){
        outCourse.push(<p>Course {i}</p>)
    }

    return ( 
        <p>
            Student is enrolled in <b>Course {props.courseNumber}</b>
            <b>{outCourse}</b>
        </p>
    );
}
 
export default Course;