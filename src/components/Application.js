import React, { useEffect, useState} from 'react';
import axios from 'axios';
import DayList from "./DayList";
import "components/Application.scss";
import Appointment from "components/Appointment"; 



export default function Application() {
  
  const setDay = day => setState({ ...state, day });
  const setDays = (days) => setState(prev => ({ ...prev, days }));
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {}
  });
  const dailyAppointments = [];

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:8001/api/days')
        .then(response => setDays(response.data))
        .catch((error) => console.log(error.message));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  const appointmentsList = dailyAppointments.map(appointment =>    
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
            days={state.days}
            value={state.days}
            onChange={setDay}
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
      <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}



