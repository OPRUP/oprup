export interface Transportation {
  transportationMeanId:string;
  transportationMeanCode: string;
  transportationMeanType: string;
  transportationMeanNumber: string;
  transportationMeanBuyingDate: string;
  licenseReleaseDate: string;
  licenseExpiryDate: string;
  licensePhoto: string;
  deleteFlag: number;
   employees:{
    employeeId
   }
}
