import { FastifyRequest, FastifyReply } from 'fastify'
import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-use-case'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const userProfileUseCase = makeGetUserProfileUseCase()

  const { user } = await userProfileUseCase.execute({
    userId: request.user.sub,
  })

  Reflect.deleteProperty(user, 'password_hash')

  return reply.status(200).send({
    user,
  })
}
