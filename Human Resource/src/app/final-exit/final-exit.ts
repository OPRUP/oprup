import {Employee} from "../employees/employee";

export interface FinalExit{
    finalExitId:string;
    ticket:string;
    exitDate:string;
    reason:string;
    // deleteFlag:string;
    // approve:string;
  employees?:Employee[];
}
export interface Employee09_Contract {}
export interface ContractDetail{}