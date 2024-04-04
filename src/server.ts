// Third party
import fastify from 'fastify'
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"

// Local
import { eventRoutes } from './http/controllers/event'
import { attendeeRoutes } from './http/controllers/attendee';

const app = fastify()
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(eventRoutes, { prefix: 'api/events' })
app.register(attendeeRoutes, { prefix: 'api/attendees' })

app.listen({
  port: 3333
}).then(() => console.log('HTTP Server Running'))