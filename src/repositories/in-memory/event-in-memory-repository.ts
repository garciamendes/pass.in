// Node
import { randomUUID } from 'node:crypto'

// Third party
import { Event } from '@prisma/client'

// Project
import { ICreateEvent } from '../../utils/types'
import { IEventRepository } from '../event-repository'
import { generateSlug } from '../../utils'

export class EventInMemoryRepository implements IEventRepository {
  public events: Event[] = []

  async create({ title, details, maximumAttendees }: ICreateEvent) {
    const event: Event = {
      uid: randomUUID(),
      title,
      details: details || null,
      maximumAttendees: maximumAttendees || null,
      slug: generateSlug(title)
    }

    this.events.push(event)
    return event
  }
}