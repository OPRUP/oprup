import {Employee} from "../employees/employee";

export interface ATMCardRequest{
    creditCardRequestId:string;
    date:string;
    reason:string;

  employees?:Employee[];
}
export interface Employee09_Contract {}
