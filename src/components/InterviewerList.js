import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss";
import PropTypes from 'prop-types';

export default function InterviewerList(props) {
  const Interviewers = props.interviewers;
  const {onChange} = props;
  // Data Type Validation...................
  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };
  const parsedInterviewers = Interviewers.map((Interviewer)  => 
    <InterviewerListItem 
      key={Interviewer.id} 
      {...Interviewer} 
      selected={Interviewer.id === props.value} 
      setInterviewer={() => onChange(Interviewer.id)}  
    />);

  let InterviewerClass = 'interviewers__list';
  if (props.selected) InterviewerClass += 'interviewers__selected';

  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul selected= {props.selected} className={InterviewerClass}>
        {parsedInterviewers}
      </ul>
    </section>
  );

};