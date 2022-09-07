import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sheet } from './sheet';

@Injectable({
  providedIn: 'root'
})
export class SheetService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getTimeSheets(): Observable<Sheet[]>{
    return this.http.get<Sheet[]>(`${this.apiServerUrl}/TimeSheet/all`);
  }
 
   

  public getEmployees(): Observable<Sheet[]>{
    return this.http.get<Sheet[]>(`${this.apiServerUrl}/TimeSheet/all`);
  }

  public addTimeSheet(timeSheet: Sheet): Observable<Sheet>{
   
    console.log(timeSheet)
    return this.http.post<Sheet>(`${this.apiServerUrl}/TimeSheet/add`, timeSheet);
  }

  public updateTimeSheet(timeSheet: Sheet): Observable<Sheet>{
    return this.http.put<Sheet>(`${this.apiServerUrl}/TimeSheet/update`, timeSheet);
  }

  public deleteTimeSheet(timeSheetId: number): Observable<Sheet>{
    return this.http.delete<Sheet>(`${this.apiServerUrl}/timesheet/delete/${timeSheetId}`);
  }

  // public getTimeSheetByEmployeeId(employeeId:number): Observable<Sheet[]>{
    
  //  return this.http.get<Sheet[]>(`${this.apiServerUrl}/TimeSheet/TimeSheet/${employeeId}`);
  // }

  // public getTimeSheetofEmployeeAttDate(employeeId:number,attDate:string): Observable<Sheet[]>{
    
  //   return this.http.get<Sheet[]>(`${this.apiServerUrl}/TimeSheet/sheet/${employeeId}/${attDate}`);
  //  }


  //  public getTimeSheetofEmployeeBetween(employeeId:number,attDate1:string,attDate2:string): Observable<TimeSheet[]>{
  //   
  //   return this.http.get<TimeSheet[]>(`${this.apiServerUrl}/TimeSheet/sheetbetween/${employeeId}/${attDate1}/${attDate2}`);
  //  }
  public getSheetofEmployeeS(employeeId:number,attDay,attMonth,attYear): Observable<Sheet[]>{
     
    //alert(`${this.apiServerUrl}/TimeSheet/employeeSheet/${employeeId}/${attDay}/${attMonth}/${attYear}`)
    return this.http.get<Sheet[]>(`${this.apiServerUrl}/TimeSheet/employeeSheet/${employeeId}/${attDay}/${attMonth}/${attYear}`);
   }

   public getTotalSalEmployeeS(employeeId:number): Observable<Sheet[]>{
    
    //alert(`${this.apiServerUrl}/contractDetail/totalSal/${employeeId}`)
    return this.http.get<Sheet[]>(`${this.apiServerUrl}/contractDetail/totalSal/${employeeId}`);
   }

}
