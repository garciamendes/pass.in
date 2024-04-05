// Third party
import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

// Project
import { attendeeRetrieveBadgeParams } from '../../../utils/types'
import { prisma } from '../../../lib/prisma'

export const checkIn = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { attendeeUid } = request.params as attendeeRetrieveBadgeParams

    const checkIn = await prisma.checkIn.findUnique({
      where: { attendeeUid }
    })

    if (checkIn)
      throw new Error('Esse usuario ja fez o check-in')

    await prisma.checkIn.create({
      data: {
        attendeeUid
      }
    })

    return reply.status(201).send()
  } catch (error) {
    const err = error as FastifyError
    console.log(err)

    return reply.status(400).send({
      message: err.message
    })
  }
}