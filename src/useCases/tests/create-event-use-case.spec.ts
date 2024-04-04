// Third party
import { beforeEach, describe, expect, it } from 'vitest'

// Project
import { CreateEventUseCase } from '../create-event'
import { EventInMemoryRepository } from '../../repositories/in-memory/event-in-memory-repository'

let eventRespository: EventInMemoryRepository
let sut: CreateEventUseCase

describe('Create Event Use Case', () => {
  beforeEach(async () => {
    eventRespository = new EventInMemoryRepository()
    sut = new CreateEventUseCase(eventRespository)
  })

  it('Sould be to possible create a new event', async () => {
    const { event } = await sut.execute({
      title: 'Event create test case'
    })

    expect(event.uid).toEqual(expect.any(String))
    expect(event.slug).toEqual('event-create-test-case')
  })
})