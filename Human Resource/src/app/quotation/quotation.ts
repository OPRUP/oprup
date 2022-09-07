import { Customer } from "../customer/Customer";
import { Employee } from "../employees/employee";
import { Items } from "../items/items";


export interface Quotation {
    quotationId: string,
    quotationAutoNum: string,
    date: string,
    description:string,
    generalTerms:string;
    advancedPayment:string;
    // numberHours: string;
    quotationStatus :string,
    customer: { 
        customerId},
    employee: {
         employeeId},
         
    // employees?:Employee[];
    // customers?:Customer[];
}



export interface QuotationItem {
    quotationItemId:string,
   
    quotationItemValue:string,
    quotationItemTotalValue:string,
    quotation:{quotationId: string },
    item:{itemId: string },
   
}

