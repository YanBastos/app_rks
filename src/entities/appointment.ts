/* eslint-disable */ 
export interface AppointmentProps {
  customer: string
  startAt: Date
  endsAt: Date
}

export class Appointment {
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

  constructor (props: AppointmentProps) {
    this.props = props
  }
}
