// Third party
import fastify from 'fastify'

// Local
import { eventRoutes } from './http/controllers/event'

const app = fastify()

app.register(eventRoutes, { prefix: 'api/events' })

app.listen({
  port: 3333
}).then(() => console.log('HTTP Server Running'))