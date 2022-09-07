import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Advance } from './advance';


@Injectable({
  providedIn: 'root'
})
export class AdvanceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAdvances(): Observable<Advance[]>{
    return this.http.get<Advance[]>(`${this.apiServerUrl}/advance/all`);
  }
  public Approve(): Observable<Advance[]>{
    return this.http.get<Advance[]>(`${this.apiServerUrl}/advance/ALLApprove`);
  }
  public Rejrct(): Observable<Advance[]>{
    return this.http.get<Advance[]>(`${this.apiServerUrl}/advance/ALLRejrct`);
  }


  public addAdvance(advance: Advance): Observable<Advance>{
    return this.http.post<Advance>(`${this.apiServerUrl}/advance/add`, advance);
  }

  public approveAdvance(advance: Advance): Observable<Advance>{
    return this.http.put<Advance>(`${this.apiServerUrl}/advance/approve`, advance);
  }

  public rejectAdvance(advance: Advance): Observable<Advance>{
    return this.http.put<Advance>(`${this.apiServerUrl}/advance/reject`, advance);
  }

  public getAdvanceById(advanceId: number): Observable<Advance>{
    return this.http.get<Advance>(`${this.apiServerUrl}/advance/approve/${advanceId}`);
  }
  public getAdvanceByEmpId(employeeId: number): Observable<Advance>{

    return this.http.get<Advance>(`${this.apiServerUrl}/advance/adv/${employeeId}`);
  }

  public getAdvanceByApproveEmpId(employeeId: number): Observable<Advance>{

    return this.http.get<Advance>(`${this.apiServerUrl}/advance/advapp/${employeeId}`);
  }
  // public approve(advance: Advance): Observable<Advance>{
  //   return this.http.put<Advance>(`${this.apiServerUrl}/advance/approveAdvance`, advance);
  // }

}
