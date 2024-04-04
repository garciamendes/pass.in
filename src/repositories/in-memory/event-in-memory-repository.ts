// Node
import { randomUUID } from 'node:crypto'

// Third party
import { Event } from '@prisma/client'

// Project
import { ICreateEvent, IResponseEventRetrieve } from '../../utils/types'
import { IEventRepository } from '../event-repository'
import { generateSlug } from '../../utils'

export class EventInMemoryRepository implements IEventRepository {
  public events: IResponseEventRetrieve[] = []

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

  async findEventByUid(eventId: string) {
    const event = this.events.find(event => event.uid === eventId)

    if (!event)
      return null

    return event
  }
}