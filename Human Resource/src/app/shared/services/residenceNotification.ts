import { Companies } from "src/app/companies/companies";

export interface residenceNotification {
  residenceExpiry:string;
  companies?:Companies[]
}
