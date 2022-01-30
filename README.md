# Interview Scheduler

## Setup

## If you want to run the app locally
* Fork this repository, then clone your fork of this repository.
* Go to the scheduler-api repository that contains the database and fork it, then clone your fork of this repository.
* Install dependencies in both folders (scheduler & shceduler-api) using the npm install command.
* Open two terminals, one for scheduler and the second for scheduler-api.
* Run the both servers using the npm start command.
* Go to http://localhost:8000/ in your browser and tinker with the app.
* (Optional): Run the Jest Test Framework using npm test in an other terminal.
* (Optional): Run the Storybook Visual Testbed using npm run storybook in an other terminal.

# Behavioural Requirements
  * Interviews can be booked between Monday and Friday.
  * A user can switch between weekdays.
  * A user can book an interview in an empty appointment slot.
  * Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
  * A user can cancel an existing interview.
  * A user can edit the details of an existing interview.
  * The list of days informs the user how many slots are available for each day.
  * The expected day updates the number of spots available when an interview is booked or canceled.
  * A user is presented with a confirmation when they attempt to cancel an interview.
  * A user is shown an error if an interview cannot be saved or deleted.
  * A user is shown a status indicator while asynchronous operations are in progress.
  * When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
  * The application makes API requests to load and persist data. We do not lose data after a browser refresh.

# Final Product

  * Create An Appointment 


!["Create An Appointment "](https://github.com/ZakiyaA/schedule/blob/master/docs/ezgif.com-gif-maker.gif)

 * Save_Edit Error 

!["Save_Edit Error  "](https://github.com/ZakiyaA/schedule/blob/master/docs/Save_Delete_Error.gif)

* Save_ Delete An Appointment

!["Save_ Delete An Appointment page"](https://github.com/ZakiyaA/schedule/blob/master/docs/Edit_Delete_appointment.gif) 




