import React, { useEffect, useState} from 'react';
import axios from 'axios';
import DayList from "./DayList";
import "components/Application.scss";
import Appointment from "components/Appointment"; 
import  {getAppointmentsForDay, getInterview, getInterviewersForDay}  from "../helpers/selector.js";

export default function Application() {

  const setDay = day => setState({ ...state, day });
  // const setDays = (days) => setState(prev => ({ ...prev, days }));
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {}
  });


  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    // setState({ ...state, appointments});
    console.log(id, interview);
    console.log("123")
    return (
    axios.put(`/api/appointments/${id}`, {interview})
    .then(response => {   
      console.log("abc")
      setState((prev) => ({...prev, appointments}));
console.log("Status: ", response.status);
console.log("Data: ", response.data);
})
    .catch((err) => console.log(err.message))
    )
  };



// .then(response => {setState((prev) => ({...prev, appointments}));
// console.log("Status: ", response.status);
// console.log("Data: ", response.data);
// })


  const interviewers = getInterviewersForDay(state, state.day)
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const appointmentsList = dailyAppointments.map(appointment =>  { 
  const interview = getInterview(state, appointment.interview);
  
 
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
      
      />
    );
  });

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      const [days, appointments, interviewers] = all;
      setState(prev => ({...prev, days: days.data, appointments: appointments.data, interviewers: interviewers.data }));
      
    });

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
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



