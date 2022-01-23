import React from 'react';
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import Empty from "components/Appointment/Empty.js";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  // const EMPTY = "EMPTY";
  // const SHOW = "SHOW";
  
  return(
    <article className="appointment">
      <Header/>
      {props.time}
      {props.interview? <Show   student={props.interview.student} 
      interviewers={[props.interview.interviewer]}/> : <Empty/>}
    </article>
    
  );
};