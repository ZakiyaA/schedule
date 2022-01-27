import React from "react";
import classNames from 'classnames/bind';
import   "components/InterviewerListItem.scss";
export default function InterviewerListItem(props) {
  const handleClick= () => props.setInterviewer(props.id);
  const InterviewerClass = classNames("interviewers__list", {
    " interviewers__item--selected": props.selected,
 });

  return (
    <li className={InterviewerClass} onClick={handleClick}>
      <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
      />
      {props.selected && props.name}
    </li>   
    );
} 