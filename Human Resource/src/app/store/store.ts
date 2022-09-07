import {Employee} from "../employees/employee";






export interface Store {
storeId: string;
stroeCode: string;
storePlace: string;
storeContact: string;
// storeKeeper: string;
deleteFlag: number;
employees?:Employee[];
}

export interface Employee09_Contract {}