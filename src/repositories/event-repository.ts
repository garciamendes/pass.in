// Third party
import { Event } from "@prisma/client"

// Project
import { ICreateEvent } from '../utils/types'

export interface IEventRepository {
  create: (data: ICreateEvent) => Promise<Event>
}