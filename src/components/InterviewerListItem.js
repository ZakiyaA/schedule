import React from "react";
import classNames from 'classnames/bind';
import   "components/InterviewerListItem.scss";
export default function InterviewerListItem(props) {
  // console.log(props)
  const handleClick= () => props.setInterviewer(props.id);
  // let dayClass="interviewers__item"
  // if (props.selected) dayClass = 'interviewers__item--selected';

//   const dayClass = classNames("interviewers__item", {
//     "interviewers__item--selected": props.selected,

//  });
 let name = "";
 let InterviewerClass = 'interviewers__list';
 if (props.selected) { 
  InterviewerClass += 'interviewers__selected';
  name = props.name;
 }
  return (
    <li className={InterviewerClass} onClick={handleClick}>
      <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
      />
      {name}
    </li>   
    );

} 


// slectected= {props.selected}