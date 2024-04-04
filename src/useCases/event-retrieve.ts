// Project
import { IEventRepository } from '../repositories/event-repository'

export class EventRetrieveUseCase {
  constructor(private eventRepository: IEventRepository) {}

  async execute(eventId: string) {
    const event = await this.eventRepository.findEventByUid(eventId)

    if (!event)
      throw new Error('Evento não existe!')

    return {
      event: {
        uid: event.uid,
        title: event.title,
        slug: event.slug,
        details: event.details,
        maximumAttendees: event.maximumAttendees,
        attendeesAmount: event._count.attedees
      }
    }
  }
}