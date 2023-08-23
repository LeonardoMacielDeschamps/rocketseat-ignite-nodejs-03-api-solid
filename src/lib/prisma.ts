import { env } from '@/env'
import { Prisma, PrismaClient } from '@prisma/client'

const prismaClientOptions = {} as Prisma.PrismaClientOptions

if (env.NODE_ENV === 'dev') {
  prismaClientOptions.log = ['query']
}

export const prisma = new PrismaClient(prismaClientOptions)
