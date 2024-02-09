/* eslint-disable */

import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointmennt";
import { Appointment } from "../entities/appointment";

describe('create appointment', () => {
    it('should be able to create an apponintment', () => {
        const createAppointment = new CreateAppointment()

        const startsAt = new Date()
        const endsAt = new Date()

        endsAt.setDate(endsAt.getDate() + 1)

        expect(CreateAppointment.execute({
            customer: 'Jhon Doe',
            startsAt: new Date(),
            endsDate: new Date(),
        })).resolves.toBeInstanceOf(Appointment)
    })
})