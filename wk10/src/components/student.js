import React from "react";
import Course from "./course";
const Student = props => {
    let course = []
    for(var i=0;i<props.enrolled;i++){
        course.push(<Courses enrolled={i} />)
    }
    return ( 
    <>
        <p>
            Student <b>{props.name}</b> with student number <b>{props.number}</b>
        </p>
        {course}
    </>
    );
}