/* eslint-disable */
//Every use case has an input, an output, and a result

import { Appointment } from "../entities/appointment"

interface CreateAppointmentReq {
    customer: string
    startsAt: Date
    endsAt: Date
}

type CreateAppointmentRes = Appointment

export class CreateAppointment {
    async execute(req: CreateAppointmentReq): Promise<CreateAppointmentRes> {

    }
}