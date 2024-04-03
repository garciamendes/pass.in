// Project
import { ICreateEvent } from '../utils/types'
import { IEventRepository } from '../repositories/event-repository'

export class CreateEventUseCase {
  constructor(private eventRepository: IEventRepository) {}

  async execute(data: ICreateEvent) {
    const event = await this.eventRepository.create(data)

    return { event }
  }
}