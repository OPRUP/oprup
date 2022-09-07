export interface PaymentCheck {

    
    checkId: string,
    checkNumber: string,
    checkValue: string,
    checkDate:string,
    deleteFlag: number,
    bank: {
        bankId: string,
        
    },
    paymentVoucher: {
        paymentVoucherId: string,
    }

}
