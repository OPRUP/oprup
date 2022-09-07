import {Employee} from "../employees/employee";

export interface EmployeeLeave{
  leaveId:string;
  leaveType:string;
  description:string;
  approvedBy:string;
  leaveDate:string;
  leaveTo:string;
  leaveFrom:string;
  attachment:string;
  employees?:Employee[];
}
