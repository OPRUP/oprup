import {Employee} from "../employees/employee";

export interface Job{
    jobId:string;
    jobTitle:string;
    nationality:string;
    mainSalary:string;
    allowance: string;
    directSupervisor:{employeeId:string}
    internalExternal:string;
}