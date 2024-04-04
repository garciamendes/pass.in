// Project
import { prisma } from '../../lib/prisma'
import { generateSlug } from '../../utils'
import { ICreateEvent } from '../../utils/types'
import { IEventRepository } from '../event-repository'

export class EventPrismaRespositoy implements IEventRepository {
  async create({ title, details, maximumAttendees }: ICreateEvent) {
    const event = await prisma.event.create({
      data: {
        title,
        details,
        maximumAttendees,
        slug: generateSlug(title)
      }
    })

    return event
  }

  async findEventByUid(eventId: string) {
    const event = await prisma.event.findUnique({
      where: { uid: eventId },
      select: {
        uid: true,
        title: true,
        details: true,
        slug: true,
        maximumAttendees: true,
        _count: {
          select: {
            attedees: true
          }
        }
      }
    })

    if (!event)
      return null

    return event
  }
}