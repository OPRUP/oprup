import { Department } from "../departments/department";
import { Employee } from "../employees/employee";

export interface Section{
  sectionId: string;
  sectionName: string;
  managerStartingDate: string;
  contactNumber: string;
  description: string;
  deleteFlag: number;
  employees?: Employee[];
  departments?: Department[];
}
