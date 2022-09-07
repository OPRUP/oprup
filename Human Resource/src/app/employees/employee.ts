import { Companies } from "../companies/companies";
export interface Employee {
  companies: any;
  bankBranch: string;
  employeeId: string;
  employeeName: string;
  employeeNameAr: string;
  employeeCompanyId: string;
  employeePartCompanyId: string;
  placeOfBirth: string;
  dateOfBirth: string;
  dateOfJoin: string;
 //  hijriDateOfJoin: string;
  dateOfLastContact: string;
  gender: string;
  maritalStatus: string;
  nationality: string;
  religion: string;
  imageProfile: string;
  residenceName: string;
  residenceNumber: string;
  residenceIssue: string;
  residenceExpiry: string;
  country: string;
  deleteFlag: number;
  allCompanies?: Companies[];
}
export interface EmployeeImageProfile {}
export interface Employee03_Document {
  documentId: string,
  documentType: string,
  documentNumber: string,
  documentDateExpiry: string,
  documentFile: string,
  deleteFlag: Number,
  AllEmployee?: Employee[];
}
export interface Employee05_Address{}
export interface Employee06_Qualification {

}
export interface Employee07_WorkExperience {}
export interface Employee08_BankAccount {
  bankBranch: any;
}
export interface Employee09_Contract {}
export interface Employee10_HealthInsurance {
  residenceNumber: any;
}
export interface Employee11_EmployedInformation {}

export interface ContractDetail{}
export interface Employee10_HealthInsurance {}
export interface Employee_HabitationAndTransport{}
// export interface Employee11_EmployedInformation {}
