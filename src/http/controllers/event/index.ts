// Third party
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

// Project
import {
  createEventSchema,
  registerEventParams,
} from '../../../utils/types'

// Local
import { createEvent } from './createEvent'
import { eventRetrieve } from './eventRetrieve'

export const eventRoutes = async (app: FastifyInstance) => {
  app.withTypeProvider<ZodTypeProvider>().post('/', {
    schema: {
      body: createEventSchema
    }
  }, createEvent),

  app.withTypeProvider<ZodTypeProvider>().get('/:eventId', {
    schema: {
      params: registerEventParams,
    }
  }, eventRetrieve)
}