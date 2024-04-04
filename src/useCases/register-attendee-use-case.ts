// Project
import { IRegisterAttendee } from '../utils/types'
import { IAttendeeRepository } from '../repositories/attendee-repository'
import { IEventRepository } from '../repositories/event-repository'

export class RegisterAttendeeUseCase {
  constructor(private attendeeRepository: IAttendeeRepository, private eventRepository: IEventRepository) { }

  async execute({ eventId, data }: IRegisterAttendee) {
    const [event, countAttendeesByEventId] = await Promise.all([
      this.eventRepository.findEventByUid(eventId),
      this.attendeeRepository.countAttendeesByEventId(eventId)
    ])

    if (!event)
      throw new Error('Evento não existe')

    if (event.maximumAttendees && countAttendeesByEventId > event.maximumAttendees)
      throw new Error('Todas as vagas para esse evento foram preenchidas')

    const attendee = await this.attendeeRepository.registerAttendee({ eventId, data })

    return { attendee }
  }
}