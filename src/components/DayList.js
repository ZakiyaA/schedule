import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  // console.log(props)
  const days = props.days;
  const parsedDays = days.map((day, index)  => <DayListItem  key={day.id} {...day} selected={days[index].name === props.value} setDay={props.onChange}  />);

  return (
    <ul>

      {parsedDays}
    </ul>
    
    );
};