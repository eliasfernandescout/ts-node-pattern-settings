import { request, response, Router } from "express";
import { v4 as uuid } from "uuid";
import { startOfHour, parseISO, isEqual } from "date-fns";
import Appointment from "../entities/Appointment";

const appointmentsRouter = Router();

const appointments: Appointment[] = [];

// http:http://localhost:5000
appointmentsRouter.post("/", (request, response) => {

  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parseDate, appointment.date),
  );

  console.log("provider", request.body);

  const appointment = new Appointment(provider, parseDate )

  if(findAppointmentInSameDate){
      return response.status(400).json({message: 'This appointment is already booked'})
  }

  appointments.push(appointment);
  return response.json(appointment);
});

export default appointmentsRouter;
