import { Employee } from "../employees/employee";

export interface Sheet {
    timeSheetId:string;
     attDay:string;
     attWeekDay:string;
     attMonth:string;
     attYear:string;
     overTimeHour:string;
     otValue:string;
     attValue:string;
     attTotalValue:string;
     attHour:string;
     projectName:string;
    
    employees?:Employee[];



   
}
