export function getAppointmentsForDay(state, day) {
  const daysArray = state.days.filter(dayArray => dayArray.name === day);
  let appointmentArray = daysArray.map( (item) => item.appointments);
  appointmentArray = appointmentArray.flat();
  const appointments = [];
  for (let appointment of appointmentArray) {
    if (state.appointments[appointment.toString()].id)
    appointments.push(state.appointments[appointment]);
  }
  return appointments;
};

export function getInterviewersForDay(state, day) {
  const daysArray = state.days.filter(dayArray => dayArray.name === day);
  let interviewersArray = daysArray.map( (item) => item.interviewers);
  interviewersArray = interviewersArray.flat();
  const interviewers = [];
  for (let interviewer of interviewersArray) {
    if ( state.interviewers[interviewer])
    interviewers.push(state.interviewers[interviewer]);
  }
  // console.log(interviewers)
  return interviewers;
};



export function getInterview(state, interview) {
  if (!interview) {
    return null
  }
  let interviewer = state.interviewers[interview.interviewer]
  return { ...interview, interviewer }
};



