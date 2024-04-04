// Project
import { CreateEventUseCase } from "../create-event"
import { EventPrismaRespositoy } from "../../repositories/prisma/event-prisma-repository"

export const makeCreateEventUseCase = () => {
  const eventRepository = new EventPrismaRespositoy()
  const createEventUseCase = new CreateEventUseCase(eventRepository)

  return createEventUseCase
}