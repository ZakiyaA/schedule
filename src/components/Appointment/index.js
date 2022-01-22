import React from 'react';
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import Empty from "components/Appointment/Empty.js";

export default function Appointment(props) {
  return(
    <article className="appointment">
      {props.time}
      {props.interview? <Show   student={props.interview.student} 
      interviewers={[props.interview.interviewer]}/> : <Empty/>}
    </article>
    
  );
};