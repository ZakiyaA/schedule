import React from "react";
import "components/DayListItem.scss";
import classNames from 'classnames';


export default function DayListItem(props) {
  console.log("DayLists", props)
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

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })


  return (
    <li className={dayClass} onClick = {handleClick}  >
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light" >{formatSpots(props)} </h3>
    </li>
  );
}


// selected={props.selected}
