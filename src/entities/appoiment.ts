export class Appoitment {
    private customer: string
    private startAt: Date
    private endsAt: Date


    set endsAt(date: Date) {
        if (date.getTime() <= this.startAt.getTime()) {
        }

    get custommer() {
            return this.customer;
        }

    }