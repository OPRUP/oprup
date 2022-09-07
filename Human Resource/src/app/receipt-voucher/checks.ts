export interface Checks{

    checkId: string,
    checkNumber: string,
    checkValue: string,
    checkDate:string,
    deleteFlag: number,
    bank: {
        bankId: string,
        
    },
    receiptVoucher: {
        receiptVoucherId: string,
    }   

}