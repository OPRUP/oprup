import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../employees/employee';
import { Bank } from './bank';
import { QiwaContracts } from './qiwacontracts';

@Injectable({
  providedIn: 'root'
})


export class FollowupService {
  employeecount:any;
  qiwaEmployeecount:any;
  exitemployeecount:any;
  creditcount:any;
  projectcount:any;
  existingWorkers:any;
  travelingemployeecount:any;
  countbyMedicalResult:any;
  countbyInsurance:any;
  countbyResidence:any;
  resedinceExpiryWeek:any=[{}];
  resedinceExpiryWeekCount:any=[{}];
  resedinceExpiryTwoWeek:any=[{}];
  resedinceExpiryTwoWeekCount:any=[{}];
  resedinceExpiryThreeWeek:any=[{}];
  resedinceExpiryThreeWeekCount:any=[{}];
  resedinceExpiryFourWeek:any=[{}];
  resedinceExpiryFourWeekCount:any=[{}];
  passportExpiryMonth:any=[{}];
  passportExpiryTwoMonth:any=[{}];
  passportExpiryThreeMonth:any=[{}];
  passportExpiryFourMonth:any=[{}];
  passportExpiryMonthCount:any=[{}];
  passportExpiryTwoMonthCount:any=[{}];
  passportExpiryThreeMonthCount:any=[{}];
  passportExpiryFourMonthCount:any=[{}];
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getEmployeeCount(){
    return this.http.get(`${this.apiServerUrl}/employee/count`).subscribe((res)=>{this.employeecount=res
      localStorage.setItem('countofemployee',this.employeecount)
  })}
  public get(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }
  public getExitEmployeeCount(){
    return this.http.get(`${this.apiServerUrl}/employee/countOfExitEmployee`).subscribe((res)=>{this.exitemployeecount=res
      localStorage.setItem('countofexitemployee',this.exitemployeecount)
  })}

  public getTravelingEmployee(){
    return this.http.get(`${this.apiServerUrl}/travelingEmployee/count`).subscribe((res)=>{this.travelingemployeecount=res
      localStorage.setItem('countoftravelingemployee',this.travelingemployeecount)
  })}

  public getContractCount(){
    return this.http.get(`${this.apiServerUrl}/employeeContract/count`);
  }

  //residence
  getResidenceExpiryInWeek(){
    return this.http.get(`${this.apiServerUrl}/employee/ResidenceNotificationInWeek`).subscribe((res)=>{this.resedinceExpiryWeek=res
      this.resedinceExpiryWeekCount=this.resedinceExpiryWeek.length
      localStorage.setItem('residenceinweek',this.resedinceExpiryWeekCount)
    });
    }
  getResidenceExpiryInTwoWeek(){
    return this.http.get(`${this.apiServerUrl}/employee/ResidenceNotificationInTwoWeek`).subscribe((res)=>{this.resedinceExpiryTwoWeek=res
      this.resedinceExpiryTwoWeekCount=this.resedinceExpiryTwoWeek.length
      localStorage.setItem('residenceintwoweek',this.resedinceExpiryTwoWeekCount)
  });
  }
  getResidenceExpiryInThreeWeek(){
    return this.http.get(`${this.apiServerUrl}/employee/ResidenceNotificationInThreeWeek`).subscribe((res)=>{this.resedinceExpiryThreeWeek=res
      this.resedinceExpiryThreeWeekCount=this.resedinceExpiryThreeWeek.length
      localStorage.setItem('residenceinthreeweek',this.resedinceExpiryThreeWeekCount)
  });
  }
  getResidenceExpiryInFourWeek(){
    return this.http.get(`${this.apiServerUrl}/employee/ResidenceNotificationInFourWeek`).subscribe((res)=>{this.resedinceExpiryFourWeek=res
      this.resedinceExpiryFourWeekCount=this.resedinceExpiryFourWeek.length
      localStorage.setItem('residenceinfourweek',this.resedinceExpiryFourWeekCount)
  });
  }
 //passport
 getPassPortExpiryInMonth(){
  return this.http.get(`${this.apiServerUrl}/employee/PassPortNotificationInMonth`).subscribe((res)=>{this.passportExpiryMonth=res
    this.passportExpiryMonthCount=this.passportExpiryMonth.length
    localStorage.setItem('passportinmonth',this.passportExpiryMonthCount)
  });
  }
  getPassPortExpiryInTwoMonth(){
  return this.http.get(`${this.apiServerUrl}/employee/PassPortNotificationInTwoMonth`).subscribe((res)=>{this.passportExpiryTwoMonth=res
    this.passportExpiryTwoMonthCount=this.passportExpiryTwoMonth.length
    localStorage.setItem('passportintwomonth',this.passportExpiryTwoMonthCount)
});
}
getPassPortExpiryInThreeMonth(){
  return this.http.get(`${this.apiServerUrl}/employee/PassPortNotificationInThreeMonth`).subscribe((res)=>{this.passportExpiryThreeMonth=res
    this.passportExpiryThreeMonthCount=this.passportExpiryThreeMonth.length
    localStorage.setItem('passportinthreemonth',this.passportExpiryThreeMonthCount)
});
}
getPassPortExpiryInFourMonth(){
  return this.http.get(`${this.apiServerUrl}/employee/PassPortNotificationInFourMonth`).subscribe((res)=>{this.passportExpiryFourMonth=res
    this.passportExpiryFourMonthCount=this.passportExpiryFourMonth.length
    localStorage.setItem('passportinfourmonth',this.passportExpiryFourMonthCount )
});
}

public getEmployeeNotHaveMedical(){
  return this.http.get(`${this.apiServerUrl}/employeeDetailsHealthInsurance/countbyMedicalResult`).subscribe((res)=>{this.countbyMedicalResult=res
    localStorage.setItem('countbyMedicalResult',this.countbyMedicalResult)
})}
public getEmployeeNotHaveinsurance(){
  return this.http.get(`${this.apiServerUrl}/employeeDetailsHealthInsurance/countbyInsurance`).subscribe((res)=>{this.countbyInsurance=res
    localStorage.setItem('countbyInsurance',this.countbyInsurance)
})}
public getEmployeeNotHaveResidence(){
  return this.http.get(`${this.apiServerUrl}/employeeDetailsHealthInsurance/countbyResidence`).subscribe((res)=>{this.countbyResidence=res
    localStorage.setItem('countbyResidence',this.countbyResidence)
})}

public getProjectCount(){
  return this.http.get(`${this.apiServerUrl}/project/count`).subscribe((res)=>{this.projectcount=res
    localStorage.setItem('projectcount',this.projectcount)
})}

//credit card
public getCreditCard(): Observable<Bank[]>{
  return this.http.get<Bank[]>(`${this.apiServerUrl}/employeeDetailsBank/CreditCardNotification`)}
 
public getCreditCardsHaveNotYetBeenIssued(): Observable<Bank[]>{
    return this.http.get<Bank[]>(`${this.apiServerUrl}/employeeDetailsBank/CreditCardsHaveNotYetBeenIssued`)}  
  
public getCreditCardCount(){
  return this.http.get(`${this.apiServerUrl}/employeeDetailsBank/CreditCardCount`).subscribe((res)=>{this.creditcount=res
})}

//travelling employee
public getTravellingEmployee(){
  return this.http.get(`${this.apiServerUrl}/travelingEmployee/getTravelingEmployee`);
}

public getFinalExitEmployee(){
  return this.http.get(`${this.apiServerUrl}/employee/ExitEmployee`);
}

public getAllExistEmployee(){
  return this.http.get(`${this.apiServerUrl}/employee/getExistEmployee`);
}
//qiwa employee
public getQiwaEmployeeCount(){
  return this.http.get(`${this.apiServerUrl}/employeeContract/countOfQiwa`).subscribe((res)=>{this.qiwaEmployeecount=res
   
})}
public getQiwaEmployee(): Observable<QiwaContracts[]>{
  return this.http.get<QiwaContracts[]>(`${this.apiServerUrl}/employeeContract/allQiwaEmployee`);
}

//hokomi
public getEmployeeByMedicalExaminationCode(){
  return this.http.get(`${this.apiServerUrl}/employeeDetailsHealthInsurance/ByMedicalExaminationCode`);
}
public getEmployeeByInsurancesCode(){
  return this.http.get(`${this.apiServerUrl}/employeeDetailsHealthInsurance/ByInsurancesCode`);
}
public getEmployeeByByNotHaveResidenceYet(){
  return this.http.get(`${this.apiServerUrl}/employeeDetailsHealthInsurance/ByNotHaveResidenceYet`);
}
}
