import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  // console.log(props)
  const {days }= props;
  // console.log(days.length)
  const parsedDays = days.map((day)  => {return(<DayListItem 
                          
    key={day.id}
    {...day} 
    selected={days.name === props.value} 
    setDay={props.onChange}  

    />)}
                          
                          );

  return (
    <ul>

      {parsedDays}
    </ul>
    
    );
};