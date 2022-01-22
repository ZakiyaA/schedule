import React, { useEffect, useState} from 'react';
import axios from 'axios';
import DayList from "./DayList";
import "components/Application.scss";
import Appointment from "components/Appointment"; 

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer:{
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer:{
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
  }
];




export default function Application(props) {
  const [days, setDays] = useState([]);
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:8001/api/days')
        .then(response => setDays(response.data))
        .catch((error) => console.log(error.message));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  const appointmentsList = appointments.map(appointment =>    
    <Appointment 
        key={appointment.id}
        {...appointment} 
    />)
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu"></nav>
        <div>
          <DayList
            days={days}
            value={days}
            onChange={setDays}
          />
      </div>

        <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />

      
      </section>
      <section className="schedule">
  
      {appointmentsList}
      </section>
    </main>
  );
}



