/* eslint-disable */

import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointmennt";

describe('create appointment', () => {
    it('should be able to create an apponintment', () => {
        const createAppointment = new CreateAppointment()

        expect(CreateAppointment.execute({
            customer:'Jhon Doe',
            startsAt: new Date(),
            endsDate: new Date(),
        }))
    })
})