import React from 'react';
// import axios from 'axios';
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import Empty from "components/Appointment/Empty.js";
import Form from "components/Appointment/Form.js";
import useVisualMode from "hooks/useVisualMode";
// import { CREATE } from 'react-test-renderer';
import Status from "components/Appointment/Status"
export default function Appointment(props) {
  // console.log("dddddddddd", props)
  // Transition Modes
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVE";
  
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
// console.log(props.interview)

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW));
  }

 console.log(mode)
  return(
    <article className="appointment">
      <Header time={props.time}/>
      
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (<Show student={props.interview.student} interviewer={props.interview.interviewer}/>)}
      {mode === SAVING && <Status message="SAVING"/>}
      {mode === CREATE && (<Form interviewers={props.interviewers} onCancel = {back} onSave = {save}/> )}
    
      </article>
    
  );
};

// getInterviewersForDay(props, props.days)
// {props.interview? <Show   student={props.interview.student} 
//       interviewers={[props.interview.interviewer]}/> : <Empty/>}