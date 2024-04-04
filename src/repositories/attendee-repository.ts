// Third party
import { Attendee } from "@prisma/client"

// Project
import { IRegisterAttendee, IResponseAttendeeRetrieve } from '../utils/types'

export interface IAttendeeRepository {
  registerAttendee: ({ eventId, data }: IRegisterAttendee) => Promise<Attendee>
  countAttendeesByEventId: (eventId: string) => Promise<number>
  findAttendeeByUid: (attendeeId: string) => Promise<IResponseAttendeeRetrieve | null>
}