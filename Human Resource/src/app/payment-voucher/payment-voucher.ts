import { Bank } from "../banks/bank";
import { Customer } from "../customer/Customer";

export interface PaymentVoucher {
    paymentVoucherId: string,
    description: string,
    cashAmount: string,
    paymentVoucherNumber:string,
    voucherDate: string,
    
   
    vendorAccount: {
        accountId:string
    },
    cashAccount: {
        accountId:string
    },
    checksAccount: {
        accountId:string
    },
    
    deleteFlag: number;
    checksAmount:number
}
