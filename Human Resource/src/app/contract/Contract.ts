export interface Contract{

    contractId:string,
    durationofContract:string,
    downpayment: string,
    contractNumber: string,
    type: string,
    customer: {
      customerId: string,
    },
    description:string,
    generalTerms:string
    
  
  
  
  }
  export interface ContractItem{
    contractItemId:string,
    item:{itemId: string },
    contract:[],
    contractItemValue:string,
    employeeNumber:string,
    contractItemTotalValue:string,
    operationFee:string,
    monthlyOperationFee:string
  
  }