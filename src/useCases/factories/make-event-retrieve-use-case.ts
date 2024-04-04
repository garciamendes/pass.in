// Project
import { EventPrismaRespositoy } from "../../repositories/prisma/event-prisma-repository"
import { EventRetrieveUseCase } from "../event-retrieve"

export const makeEventRetrieveUseCase = () => {
  const eventRepository = new EventPrismaRespositoy()
  const eventRetrieveUseCase = new EventRetrieveUseCase(eventRepository)

  return eventRetrieveUseCase
}