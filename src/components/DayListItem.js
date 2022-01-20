import React from "react";
import "components/DayListItem.scss";
// import classNames from 'classnames';


export default function DayListItem(props) {
  
  const handleClick= () => props.setDay(props.name);
  const formatSpots = function(props) {
    const spots = props.spots;
    let spot_remaining = "";
    if (spots === 0) {
      spot_remaining = "no spots remaining";
    } else if (spots === 1) {
      spot_remaining = `${spots} spot remaining`;
    } else {
      spot_remaining = `${spots} spots remaining`;
    }
    return  spot_remaining;
  };

  let dayClass = 'day-list__item';
  if (props.selected) dayClass += ' day-list__item--selected';
  else if (!props.spots) dayClass += 'day-list__item--full';


  return (
    <li className={dayClass} onClick = {handleClick}  selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light" >{formatSpots(props)} </h3>
    </li>
  );
}

