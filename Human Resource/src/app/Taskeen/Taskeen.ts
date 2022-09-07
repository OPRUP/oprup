export interface Taskeen {
  habitationId:string;
  habitationCode: string;
  habitationName: string;
  habitationAddress: string;
  lessorName: string;
  rentContractStartingDate: string;
  rentContractEndingDate: string;
  rentCostPerMonth: string;
  capacity: string;
  numberOfKitchens: string;
  numberOfBathrooms: string;
  deleteFlag: number;
   employees:{
    employeeId
   }
}
