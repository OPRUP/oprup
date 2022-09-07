import { Companies } from "../companies/companies";
import { Employee } from "../employees/employee";

export interface QiwaContracts{
    contractId: string;
    contractType: string;
    dateFrom: string;
    dateTo: string;
    vacationDayNumber:string;
    qiwaCode: string;
    deleteFlag: string;
    employee?:Employee[];
    companies?:Companies[];
  }
  