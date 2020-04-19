import React from "react"
import Course from "./courses"

const Student = (props) => {
    return (  
    <div>
        <p>Student <b>{props.name}</b> with student <b>{props.number}</b></p>
        <Course courseNumber={props.enrolled}></Course>
    </div>
    );
}
 
export default Student;