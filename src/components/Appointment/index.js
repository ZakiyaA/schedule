import React from 'react';
// import axios from 'axios';
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import Empty from "components/Appointment/Empty.js";
import Form from "components/Appointment/Form.js";
import useVisualMode from "hooks/useVisualMode";
// import { CREATE } from 'react-test-renderer';
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import Confirm from 'components/Appointment/Confirm';
export default function Appointment(props) {
  // Transition Modes
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVE";
  const EDIT = "EDIT"
  const CONFIRM = "CONFIRM";
  const DELETING = "DELETE";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
// console.log(props.interview)

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING, true);
    props.bookInterview(props.id, interview)
    .then(() => {
      console.log("helllllllllllllo");
      transition(SHOW)})
    .catch(error => {
      console.log(error);
      transition(ERROR_SAVE, true)});
    
  }

  function deleteAppointment() {
    transition(DELETING, true);
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(error => {
      console.log(error);
      return transition(ERROR_DELETE, true)});
  }
 console.log(mode)
  return(
    <article className="appointment">
      <Header time={props.time}/>
      
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === EDIT && (<Form student={props.interview.student}
                                interviewer={props.interview.interviewer.id}
                                interviewers={props.interviewers} 
                                onCancel = {back} 
                                onSave = {save}/> 
                                )} 
      {mode === SHOW && (<Show student={props.interview.student} 
                                interviewer={props.interview.interviewer} 
                                onDelete={() => transition(CONFIRM)} 
                                onEdit={() => transition(EDIT)}/>
                                )}
      {mode === SAVING && <Status message="SAVING"/>}
      {mode === CONFIRM && (<Confirm onConfirm={deleteAppointment}
                                      onCancel = {back}/>)}
      {mode === DELETING && <Status message="Deleting"/>}
      {mode === CREATE && (<Form interviewers={props.interviewers} 
                                  onCancel = {back} 
                                  onSave = {save}/> 
                                  )}
      {mode === ERROR_SAVE && <Error   onClose={back}/>}                            
      {mode === ERROR_DELETE && <Error onClose={back}/>} 
    </article>
    
  );
};

// getInterviewersForDay(props, props.days)
// {props.interview? <Show   student={props.interview.student} 
//       interviewers={[props.interview.interviewer]}/> : <Empty/>}