import React from "react";
import classNames from 'classnames/bind';
import InterviewerListItem from "./InterviewerListItem";
import styles from "./InterviewerList.scss";

export default function InterviewerList(props) {
console.log(props.selected)
  const Interviewers = props.interviewers;
  const parsedInterviewers = Interviewers.map((Interviewer, index)  => 
    <InterviewerListItem  key={Interviewer.id} 
    {...Interviewer} 
    selected={Interviewers[index].name === props.Interviewer} 
    setInterviewer={props.setInterviewer}  />);


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