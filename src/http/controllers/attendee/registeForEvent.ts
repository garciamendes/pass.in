// Third party
import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

// Project
import { IRegisterEvent, registerEventParams } from '../../../utils/types'
import { makeRegisterAttendeeUseCase } from '../../../useCases/factories/make-register-attendee-use-case'

export const registerForEvent = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { eventId } = request.params as registerEventParams
    const data = request.body as IRegisterEvent

    const registerAttendeeUseCase = makeRegisterAttendeeUseCase()
    const { attendee } = await registerAttendeeUseCase.execute({ eventId, data })

    return reply.status(201).send(attendee)
  } catch (error) {
    const err = error as FastifyError
    console.log(err)

    return reply.status(423).send({
      message: err.message
    })
  }
}