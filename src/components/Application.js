import React from 'react';
import DayList from "./DayList";
import "components/Application.scss";
import Appointment from "components/Appointment"; 
import  {getAppointmentsForDay, getInterview, getInterviewersForDay}  from "../helpers/selector.js";
import useApplicationData from "../hooks/useApplicationData";

export default function Application() {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  
  const interviewers = getInterviewersForDay(state, state.day)
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const appointmentsList = dailyAppointments.map(appointment =>  { 
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={getInterview(state, appointment.interview)}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        
        <div>
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
      </div>
      <nav className="sidebar__menu"></nav>
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



