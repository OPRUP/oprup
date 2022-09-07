import { Employee } from "../employees/employee"

export interface Notification {
    date_to:string
    employees?:Employee[]
}
