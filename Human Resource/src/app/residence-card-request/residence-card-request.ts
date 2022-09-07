import {Employee} from "../employees/employee";

export interface ResidenceCardRequest{
    residenceCardRequestId:string;
    date:string;
    reason:string;

  employees?:Employee[];
}
export interface Employee09_Contract {}
