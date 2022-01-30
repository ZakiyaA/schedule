
// getAppointmentsForDay returns an array of appointment objects for the given day.
// Use the state to return the appointments for a specific day
export function getAppointmentsForDay(state, day) {
  const result = [];
  const dayData = state.days.filter(d => d.name === day)
  if (!dayData[0]) return result;
  for (const a of dayData[0].appointments) {
    result.push(state.appointments[a]);
  }
  return result;
};

// Return the interviewers of a specific day
export function getInterviewersForDay(state, day) {
  const result = [];
  const dayData = state.days.filter(d => d.name === day)
  if (!dayData[0]) return result;
  for (const a of dayData[0].interviewers) {
    result.push(state.interviewers[a]);
  }
  return result;
};

// Add the info of the interviewer for an existing interview
export function getInterview(state, interview) {
  if (!interview) {
    return null
  }
  let interviewer = state.interviewers[interview.interviewer]
  return { ...interview, interviewer }
};



