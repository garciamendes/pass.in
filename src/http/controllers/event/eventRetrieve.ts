// Third party
import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

// Project
import { registerEventParams } from '../../../utils/types'
import { makeEventRetrieveUseCase } from '../../../useCases/factories/make-event-retrieve-use-case'

export const eventRetrieve = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { eventId } = request.params as registerEventParams

    const eventRetrieveUseCase = makeEventRetrieveUseCase()
    const { event } = await eventRetrieveUseCase.execute(eventId)

    return reply.status(200).send(event)
  } catch (error) {
    const err = error as FastifyError
    console.log(err)

    return reply.status(400).send({
      message: err.message
    })
  }
}