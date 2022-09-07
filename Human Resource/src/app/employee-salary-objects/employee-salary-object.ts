import { Employee } from "../employees/employee";
import { JobTitle } from "../job-titles/job-title";
import { Section } from "../sections/section";

export interface EmployeeSalaryObject
{
  employeeSalaryObjectId:string;
  type:string;
  allowanceAmount:string;
  deductionAmount:string;
  createdDate:string;
 endDate:string;
  deleteFlag:number;
  sections?: Section[];
  jobTitles?: JobTitle[];

}
