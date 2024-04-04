// Project
import { EventPrismaRespositoy } from "../../repositories/prisma/event-prisma-repository"
import { RegisterAttendeeUseCase } from "../register-attendee-use-case"
import { AttendeePrismaRespositoy } from "../../repositories/prisma/attendee-prisma-repository"

export const makeRegisterAttendeeUseCase = () => {
  const eventRepository = new EventPrismaRespositoy()
  const attendeeRepository = new AttendeePrismaRespositoy()
  const registerAttendeeUseCase = new RegisterAttendeeUseCase(attendeeRepository, eventRepository)

  return registerAttendeeUseCase
}