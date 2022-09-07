import { Vendor } from "../vendor/Vendor";

export interface Purchasing {
  purchasingInvoiceId: string;
  purchasingInvoiceNumber: string;
  purchasingInvoiceType: string;
  date: string;
    vendorAccount: { accountId: string },
    cashAccount: { accountId: string },
    taxAccount: { accountId: string },
    purchasingAccount: { accountId: string },
    amount:number,
    tax:string,
    total:number
}


