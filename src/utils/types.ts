// Third party
import z from 'zod'

export const createEventSchema = z.object({
  title: z.string().min(4),
  details: z.string().nullable().optional(),
  maximumAttendees: z.number().int().positive().nullable().optional(),
})
export type ICreateEvent = z.infer<typeof createEventSchema>

export const registerEventSchema = z.object({
  name: z.string(),
  email: z.string().email(),
})
export type IRegisterEvent = z.infer<typeof registerEventSchema>

export const registerEventParams = z.object({
  eventId: z.string().uuid(),
})
export type registerEventParams = z.infer<typeof registerEventParams>

export interface IRegisterAttendee extends registerEventParams {
  data: IRegisterEvent
}

export const attendeeRetrieveBadge = z.object({
  attendeeUid: z.string()
})
export type attendeeRetrieveBadgeParams = z.infer<typeof attendeeRetrieveBadge>

export interface IResponseEventRetrieve {
  _count?: {
      attedees: number
  }
  title: string
  details: string | null
  maximumAttendees: number | null
  uid: string
  slug: string
}

export interface IResponseAttendeeRetrieve {
  event?: {
    title: string,
    uid: string
  }
  uid: string
  name: string
  email: string
  created: Date
}