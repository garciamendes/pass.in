// Third party
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

// Project
import {
  registerEventParams,
  registerEventSchema,
  attendeeRetrieveBadge as attendeeRetrieveBadgeZod
} from '../../../utils/types'

// Local
import { registerForEvent } from '../attendee/registeForEvent'
import { attendeeRetrieveBadge } from '../attendee/attendeeRetrieveBadge'

export const attendeeRoutes = async (app: FastifyInstance) => {
  app.withTypeProvider<ZodTypeProvider>().post('/:eventId/attendee', {
    schema: {
      params: registerEventParams,
      body: registerEventSchema
    }
  }, registerForEvent)

  app.withTypeProvider<ZodTypeProvider>().get('/:attendeeUid', {
    schema: {
      params: attendeeRetrieveBadgeZod
    }
  }, attendeeRetrieveBadge)
}