import {Employee} from "../employees/employee";

export interface Vacation{
  vacationId:string;
  vacationType:string;
  description:string;
  approvedBy:string;
  dateFrom:string;
  dateTo:string;
  attachment:string;
  daysOfVacation:string;
  employees?:Employee[];
}
export interface Employee09_Contract {}
export interface ContractDetail{}