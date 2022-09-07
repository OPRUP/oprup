import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee10_HealthInsurance, Employee11_EmployedInformation } from './employee';

@Injectable({
  providedIn: 'root'
})
export class Employee10_HealthInsuranceService {

  // constructor() { }
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public get(): Observable<Employee10_HealthInsurance[]>{
    return this.http.get<Employee10_HealthInsurance[]>(`${this.apiServerUrl}/hokome/all`);
  }

  public getById(hokomeId: number): Observable<Employee10_HealthInsurance>{
    return this.http.get<Employee10_HealthInsurance>(`${this.apiServerUrl}/hokome/employee-health/${hokomeId}`);
  }

  public add(record: Employee10_HealthInsurance): Observable<Employee10_HealthInsurance>{
    return this.http.post<Employee10_HealthInsurance>(`${this.apiServerUrl}/hokome/add`, record);
  }

  public update(record: Employee10_HealthInsurance): Observable<Employee10_HealthInsurance>{
    return this.http.put<Employee10_HealthInsurance>(`${this.apiServerUrl}/hokome/update`, record);
  }

  public delete(record: Employee10_HealthInsurance): Observable<Employee10_HealthInsurance>{
    return this.http.put<Employee10_HealthInsurance>(`${this.apiServerUrl}/hokome/delete`, record);
  }

  public getHealthByEmployeeId(employeeId: number): Observable<Employee10_HealthInsurance>{
    return this.http.get<Employee10_HealthInsurance>(`${this.apiServerUrl}/hokome/employee-health/${employeeId}`);
  }
  public deleteHealth(healthId: number){
    return this.http.delete(`${this.apiServerUrl}/hokome/${healthId}`);
  }

}
