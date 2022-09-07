import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vacation } from './vacation';
import { Employee } from '../employees/employee';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getVacations(): Observable<Vacation[]>{
    return this.http.get<Vacation[]>(`${this.apiServerUrl}/vacation/all`);
  }
  public Approve(): Observable<Vacation[]>{
    return this.http.get<Vacation[]>(`${this.apiServerUrl}/vacation/ALLApprove`);
  }
  public Rejrct(): Observable<Vacation[]>{
    return this.http.get<Vacation[]>(`${this.apiServerUrl}/vacation/ALLRejrct`);
  }
  // public findVacationByApprove(): Observable<Vacation[]>{
  //   return this.http.get<Vacation[]>(`${this.apiServerUrl}/vacation/all`);
  // }

  public getVacationById(vacationId: number): Observable<Vacation>{
    return this.http.get<Vacation>(`${this.apiServerUrl}/vacation/find/${vacationId}`);
  }

  public getEmployees(): Observable<Vacation[]>{
    return this.http.get<Vacation[]>(`${this.apiServerUrl}/vacation/employee`);
  }

  public addVacation(vacation: Vacation): Observable<Vacation>{
    return this.http.post<Vacation>(`${this.apiServerUrl}/vacation/add`, vacation);
  }

  public updateVacation(vacation: Vacation): Observable<Vacation>{
    return this.http.put<Vacation>(`${this.apiServerUrl}/vacation/update`, vacation);
  }

  public deleteVacation(vacationId: number): Observable<Vacation>{
    return this.http.delete<Vacation>(`${this.apiServerUrl}/vacation/delete/${vacationId}`);
  }



  public approveVacation(vacation: Vacation): Observable<Vacation>{
    return this.http.put<Vacation>(`${this.apiServerUrl}/vacation/approve`, vacation);
  }

  public rejectVacation(vacation: Vacation): Observable<Vacation>{
    return this.http.put<Vacation>(`${this.apiServerUrl}/vacation/reject`, vacation);
}

public getById(vacationId: number): Observable<Vacation>{
  return this.http.get<Vacation>(`${this.apiServerUrl}/vacation/approve/${vacationId}`);
}

  public get(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }

  public findDaysOfVacation(employeeId: number){
    return this.http.get(`${this.apiServerUrl}/vacation/daysOfVacation/${employeeId}`);
  }
}
