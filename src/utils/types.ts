// Third party
import z from 'zod'

export const createEventSchema = z.object({
  title: z.string().min(4),
  details: z.string().nullable().optional(),
  maximumAttendees: z.number().int().positive().nullable().optional(),
})
export type ICreateEvent = z.infer<typeof createEventSchema>