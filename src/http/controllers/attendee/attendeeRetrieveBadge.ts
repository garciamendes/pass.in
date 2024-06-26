// Third party
import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

// Project
import { attendeeRetrieveBadgeParams } from '../../../utils/types'
import { makeAttendeeRetrieveBadgeUseCase } from '../../../useCases/factories/make-attendee-retrieve-badge-use-case'

export const attendeeRetrieveBadge = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { attendeeUid } = request.params as attendeeRetrieveBadgeParams

    const attendeeRetrieveBadgeUseCase = makeAttendeeRetrieveBadgeUseCase()
    const { attendee } = await attendeeRetrieveBadgeUseCase.execute(attendeeUid)

    const baseURL = `${request.protocol}://${request.hostname}`

    const checkInURL = new URL(`/attendees/${attendee.uid}/check-in`, baseURL)

    return reply.status(200).send({
      badge: {
        ...attendee,
        checkInURL: checkInURL.toString()
      },

    })
  } catch (error) {
    const err = error as FastifyError
    console.log(err)

    return reply.status(400).send({
      message: err.message
    })
  }
}