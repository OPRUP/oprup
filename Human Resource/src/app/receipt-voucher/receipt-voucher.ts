export interface ReceiptVoucher{
    receiptVoucherId: string,
    description: string,
    cashAmount: string,
    receiptVoucherNumber:string,
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
    costCenter:{costCenterId:string}

}
