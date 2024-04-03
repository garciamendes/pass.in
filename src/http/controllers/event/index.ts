// Third party
import { FastifyInstance } from 'fastify'

// Local
import { createEvent } from './createEventController'

export const eventRoutes = async (app: FastifyInstance) => {
  app.post('/', createEvent)
}