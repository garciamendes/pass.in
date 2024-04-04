// Third party
import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

// Project
import { makeCreateEventUseCase } from '../../../useCases/factories/make-create-event-use-case'
import { ICreateEvent } from '../../../utils/types'

export const createEvent = async (request: FastifyRequest, reply: FastifyReply) => {
  try {

    const createEventUseCase = makeCreateEventUseCase()
    const { event } = await createEventUseCase.execute(request.body as ICreateEvent)

    return reply.status(201).send(event)
  } catch (error) {
    const err = error as FastifyError
    console.log(err)

    if (err.code === 'P2002')
      return reply.status(400).send({ message: 'Evento já existe!' })

    return reply.status(400).send({ message: 'Erro ao tentar criar um evento!' })
  }
}