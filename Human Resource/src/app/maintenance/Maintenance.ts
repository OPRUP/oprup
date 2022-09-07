export interface Maintenance {
  maintenanceId: String;
  maintenanceType:string;
  numberOfKm: string;
  maintenanceDate: string;
  nextMaintenanceDate: string;
  licenseExpiryDate: string;
  technicalCheck: string;
  deleteFlag: number;
  transportations:{
    transportationMeanId
   }
}
