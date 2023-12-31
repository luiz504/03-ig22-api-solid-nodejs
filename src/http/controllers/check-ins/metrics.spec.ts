import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '~/app'
import { createAndAuthenticateUser } from '~/utils/test/create-and-authenticate-user'
import { prisma } from '~/lib/prisma'

describe('Check-in Metrics (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })
  it('should be able to  get the total of check-ins', async () => {
    // Prepare
    const gym = await prisma.gym.create({
      data: {
        title: 'Javascript Gym',
        latitude: -16.6576901,
        longitude: -49.4899701,
      },
    })

    const { token } = await createAndAuthenticateUser(app)
    const user = await prisma.user.findFirstOrThrow()

    await prisma.checkIn.createMany({
      data: [
        { gym_id: gym.id, user_id: user.id },
        { gym_id: gym.id, user_id: user.id },
        { gym_id: gym.id, user_id: user.id },
      ],
    })

    // Act

    const response = await request(app.server)
      .get(`/check-ins/metrics`)
      .set('Authorization', 'Bearer ' + token)
      .send()

    expect(response.statusCode).toEqual(200)

    expect(response.body.checkInsCount).toEqual(3)
  })
})
