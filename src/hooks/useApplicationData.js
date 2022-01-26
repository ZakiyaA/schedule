import React, { useEffect, useState} from 'react';
import axios from 'axios';

export default function useApplicationData() {

 
  
 const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
});
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
    // setState({ ...state, appointments});
    console.log(id, interview);
    return (
    axios.put(`/api/appointments/${id}`, {interview})
    .then(response => {   
      setState((prev) => ({...prev, appointments}));
      console.log("Status: ", response.status);
      console.log("Data: ", response.data);
      })
    // .catch((err) => console.log(err.message))
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
    return axios
    .delete(`/api/appointments/${id}`)
    .then(() => setState((prev) => ({...prev, appointments}))); 

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

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);



return {state, setDay, setState, bookInterview, cancelInterview};
}; 