import React from 'react';
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import Empty from "components/Appointment/Empty.js";
import Form from "components/Appointment/Form.js";
import useVisualMode from "hooks/useVisualMode";


export default function Appointment(props) {
  console.log(props)
  // Transition Modes
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
//  console.log(mode)
  return(
    <article className="appointment">
      <Header time={props.time}/>
      
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        />
        
      )}
      {mode === CREATE && (
        <Form 
        
          interviewers={props.interviewers}
          onCancel = {back}
          // // onSave = {save}
        />
      )}
    </article>
    
  );
};

// getInterviewersForDay(props, props.days)
// {props.interview? <Show   student={props.interview.student} 
//       interviewers={[props.interview.interviewer]}/> : <Empty/>}