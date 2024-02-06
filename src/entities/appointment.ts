/* eslint-disable @typescript-eslint/explicit-function-return-type */
export interface AppointmentProps {
  customer: string
  startAt: Date
  endsAt: Date
}

export class Appointment {
  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private props!: AppointmentProps

  get customer () {
    return this.props.customer
  }

  get startAt () {
    return this.props.startAt
  }

  get endsAt () {
    return this.props.endsAt
  }
}
