// Third party
import { FastifyReply, FastifyRequest } from 'fastify'

// Project
import { prisma } from '../../../lib/prisma'
import { generateSlug } from '../../../utils'
import { createEventSchema } from '../../../utils/types'

export const createEvent = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { title, details, maximumAttendees } = createEventSchema.parse(request.body)

    const event = await prisma.event.create({
      data: {
        title,
        details,
        maximumAttendees,
        slug: generateSlug(title)
      }
    })

    return reply.status(201).send(event)
  } catch (error) {
    console.log(error)
    return reply.status(400).send({ message: 'Erro ao tentar criar um evento!' })
  }

  return reply.status(200).send()
}