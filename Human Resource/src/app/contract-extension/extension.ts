export interface Contract{

    contractId:string,
    durationofContract:string,
    downpayment: string,
    contractNumber: string,
    type: string,
    date:string,
    amount: number,
    tax: number,
    total: number,
    deleteFlag:number
    customer: {
      customerId: string,
    },
    description:string,   
  }
  export interface ContractItem{
    contractItemId:string,
    item:{itemId: string },
    contract:{contractId:string},
    contractItemValue:string,
    contractExtension:1;
    employeeNumber:string,
    contractItemTotalValue:string,
  
  }