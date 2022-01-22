import React from "react";
import classNames from 'classnames/bind';
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss";

export default function InterviewerList(props) {
  const Interviewers = props.interviewers;
  const {onChange} = props;
  const parsedInterviewers = Interviewers.map((Interviewer)  => 
    <InterviewerListItem 
      key={Interviewer.id} 
      {...Interviewer} 
      selected={Interviewer.id === props.value} 
      // setInterviewer={props.setInterviewer} 
      setInterviewer={() => onChange(Interviewer.id)}  
    />);


  //   const dayClass = classNames("interviewers__list", {
  //     "interviewers__selected": props.selected,
  //  });

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