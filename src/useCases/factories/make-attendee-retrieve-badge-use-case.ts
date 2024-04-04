// Project
import { AttendeePrismaRespositoy } from "../../repositories/prisma/attendee-prisma-repository"
import { AttendeeRetrieveBadgeUseCase } from "../attendee-retrieve-badge-use-case"

export const makeAttendeeRetrieveBadgeUseCase = () => {
  const attendeeRepository = new AttendeePrismaRespositoy()
  const attendeeRetrieveBadgeUseCase = new AttendeeRetrieveBadgeUseCase(attendeeRepository)

  return attendeeRetrieveBadgeUseCase
}