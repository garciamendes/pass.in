// Node
import { randomUUID } from 'node:crypto'

// Third party
import { Attendee } from '@prisma/client'

// Project
import { IRegisterAttendee } from '../../utils/types'
import { IAttendeeRepository } from '../attendee-repository'

export class AttendeeInMemoryRepository implements IAttendeeRepository {
  public attendee: Attendee[] = []

  async registerAttendee({ eventId, data }: IRegisterAttendee) {
    const attendee: Attendee = {
      uid: randomUUID(),
      name: data.name,
      email: data.email,
      created: new Date(),
      eventUid: eventId
    }

    this.attendee.push(attendee)
    return attendee
  }

  async countAttendeesByEventId(eventId: string) {
    const count = this.attendee.filter(attendee => attendee.eventUid === eventId).length

    return count
  }

  async findAttendeeByUid(attendeeUid: string) {
    const attendee = this.attendee.find(attendee => attendee.uid === attendeeUid)

    if (!attendee) return null

    return attendee
  }
}