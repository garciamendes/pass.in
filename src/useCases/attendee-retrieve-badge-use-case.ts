// Project
import { IAttendeeRepository } from '../repositories/attendee-repository'

export class AttendeeRetrieveBadgeUseCase {
  constructor(private attendeeRepository: IAttendeeRepository) {}

  async execute(attendeeUid: string) {
    const attendee = await this.attendeeRepository.findAttendeeByUid(attendeeUid)

    if (!attendee)
      throw new Error('Participante não encontrado!')

    return {
      attendee: {
        uid: attendee.uid,
        name: attendee.name,
        email: attendee.email,
        created: attendee.created,
        event: attendee.event
      }
    }
  }
}