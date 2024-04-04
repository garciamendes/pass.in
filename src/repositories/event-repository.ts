// Third party
import { Event } from "@prisma/client"

// Project
import { ICreateEvent, IResponseEventRetrieve } from '../utils/types'

export interface IEventRepository {
  create: (data: ICreateEvent) => Promise<Event>
  findEventByUid: (eventId: string) => Promise<IResponseEventRetrieve | null>
}