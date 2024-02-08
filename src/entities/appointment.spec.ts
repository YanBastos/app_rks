/* eslint-disable */
import { expect, test } from 'vitest'
import { Appointment } from './appointment'


test('create an appointment'), () => {
    const startsAt = new Date()
    const endsAt = new Date()

    const appointment = new Appointment({
        customer: 'Jhon Doe',
        startsAt: new Date(),
        endsAt: new Date()
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('Jhon Doe')
}

test('cannot create an appointement with end date before start dae', () => {
    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate() - 1) //take date one day before

    expect(() => {
        return new Appointment({
            customer: 'Jhon Doe',
            startsAt,
            endsAt
        })
    }).toThrow

})