import { Employee } from "../employees/employee";

export interface Itask {
     taskId:string;
     taskDescription:string;
     
     dueDate:string;
    userTaskState:string;
    deleteFlag:string;
    taskReply:string;
    employees?:Employee[];
}
 