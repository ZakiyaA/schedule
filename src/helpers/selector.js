export default function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  // console.log(state.days[0].id)
  const daysArray = state.days.filter(dayArray => dayArray.name === day);
  // console.log("days", daysArray)
  let appointmentArray = daysArray.map( (item) => item.appointments);
  appointmentArray = appointmentArray.flat();
  // console.log(appointmentArray)
  const appointments = [];
  for (let appointment of appointmentArray) {
    if (appointment ===  state.appointments[appointment.toString()].id)
    appointments.push(state.appointments[appointment]);
  }
  console.log("result", appointments)
  return appointments;
};

