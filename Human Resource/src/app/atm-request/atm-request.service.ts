import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../employees/employee';
import { ATMCardRequest } from './atm-request';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AtmRequestService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }



  public getAllATMCardRequest(): Observable<ATMCardRequest[]>{
    return this.http.get<ATMCardRequest[]>(`${this.apiServerUrl}/ATMCardRequest/all`);
  }
  public getATMCardRequestById(creditCardRequestId: number): Observable<ATMCardRequest>{
    return this.http.get<ATMCardRequest>(`${this.apiServerUrl}/ATMCardRequest/find/${creditCardRequestId}`);
  }
  public getEmployees(): Observable<ATMCardRequest[]>{
    return this.http.get<ATMCardRequest[]>(`${this.apiServerUrl}/ATMCardRequest/employee`);
  }


  public addATMCardRequest(aTMCardRequest: ATMCardRequest): Observable<ATMCardRequest>{
    return this.http.post<ATMCardRequest>(`${this.apiServerUrl}/ATMCardRequest/add`, aTMCardRequest);
  }

  public updateATMCardRequest(aTMCardRequest: ATMCardRequest): Observable<ATMCardRequest>{
    return this.http.put<ATMCardRequest>(`${this.apiServerUrl}/ATMCardRequest/update`, aTMCardRequest);
  }

  public deleteATMCardRequest(creditCardRequestId: number): Observable<ATMCardRequest>{
    return this.http.delete<ATMCardRequest>(`${this.apiServerUrl}/ATMCardRequest/delete/${creditCardRequestId}`);
  }

  public approveATMCardRequest(aTMCardRequest: ATMCardRequest): Observable<ATMCardRequest>{
    return this.http.put<ATMCardRequest>(`${this.apiServerUrl}/ATMCardRequest/approve`, aTMCardRequest);
  }


public rejectATMCardRequest(aTMCardRequest: ATMCardRequest): Observable<ATMCardRequest>{
  return this.http.put<ATMCardRequest>(`${this.apiServerUrl}/ATMCardRequest/reject`, aTMCardRequest)

}

public getById(creditCardRequestId: number): Observable<ATMCardRequest>{
  return this.http.get<ATMCardRequest>(`${this.apiServerUrl}/ATMCardRequest/approve/${creditCardRequestId}`);
}

  public get(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }
  

}

