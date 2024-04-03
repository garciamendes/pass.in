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
}