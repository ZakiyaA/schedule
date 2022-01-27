import React, { useEffect, useState} from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
});

  const getSpotsCount = (dayObj, appointments) => {
    let count = 0;
    for (const id of dayObj.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        count++;
      }
    }
    return count;
};

const updateSpots = (dayName, days, appointments) => {
  const day = days.find((item) => item.name === dayName);
  const unbooked = getSpotsCount(day, appointments);
  const newArr = days.map((item) => {
    if (item.name === dayName) {
      return { ...item, spots: unbooked };
    }
    return item;
  });
  return newArr;
};

// switch to a new day..........................
const setDay = day => setState({ ...state, day });  
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const spots = updateSpots(state.day, state.days, appointments);
    
    return (
    axios.put(`/api/appointments/${id}`, {interview})
    .then(response => {   
      setState((prev) => ({...prev, appointments, days: spots}));
      console.log("Status: ", response.status);
      console.log("Data: ", response.data);
      })
    )
  }; 

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const spots = updateSpots(state.day, state.days, appointments);
    return axios
    .delete(`/api/appointments/${id}`)
    .then(() => setState((prev) => ({...prev, appointments,  days: spots}))); 

  };
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
}, []);

return {state, setDay, setState, bookInterview, cancelInterview};
}; 