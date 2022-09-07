export interface Customer {
  customerId:string;
  date: string;
  numberCR: string;
  customerAccountNumber: string;
  // customerName: string;
  nameAr: string;
  nameEn: string;
  countryAr: string;
  countryEn:string;
  contractSignerNameAr: string;
  contractSignerNameEn: string;
  contractSignerIdNumber:string;
  contractSignerPhoneNumber:string;
  contractSignerEmail:string;
  followerNameAr: string;
  followerNameEn: string;
  followerContactNumber: string;
  followerEmail: string;
  customerStatus: string;
  notesAndUpdates:string;
  designation: string;
  nationality: string;
  //contactPerson: string;
  //contactNumber: string;
  //email: string;
  details: string;
  contractDuration:string;
  deleteFlag: number;
  chartAccounts?: {
     accountId?: null|string,
     //accountName:string
  },

}
