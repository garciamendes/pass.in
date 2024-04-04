// Project
import { prisma } from '../../lib/prisma'
import { IRegisterAttendee } from '../../utils/types'
import { IAttendeeRepository } from '../attendee-repository'

export class AttendeePrismaRespositoy implements IAttendeeRepository {
  async registerAttendee({ eventId, data }: IRegisterAttendee) {
    const attendee = await prisma.attendee.create({
      data: {
        name: data.name,
        email: data.email,
        eventUid: eventId
      }
    })

    return attendee
  }

  async countAttendeesByEventId(eventId: string) {
    const count = await prisma.attendee.count({ where: { eventUid: eventId } })

    return count
  }

  async findAttendeeByUid(attendeeUid: string) {
    const attendee = await prisma.attendee.findUnique({
      where: { uid: attendeeUid },
      include: {
        event: {
          select: {
            title: true,
            uid: true
          }
        }
      }
    })

    if (!attendee)
      return null

    return attendee
  }
}