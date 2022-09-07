import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee06_Qualification } from './employee';

@Injectable({
  providedIn: 'root'
})
export class Employee06_QualificationService {

  // constructor() { }
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public get(): Observable<Employee06_Qualification[]>{
    return this.http.get<Employee06_Qualification[]>(`${this.apiServerUrl}/employeeDetailsQualification/all`);
  }

  public getById(id: number): Observable<Employee06_Qualification>{
    return this.http.get<Employee06_Qualification>(`${this.apiServerUrl}/employeeDetailsQualification/find/${id}`);
  }

  public add(record: Employee06_Qualification): Observable<Employee06_Qualification>{
    return this.http.post<Employee06_Qualification>(`${this.apiServerUrl}/employeeDetailsQualification/add`, record);
  }

  public update(record: Employee06_Qualification): Observable<Employee06_Qualification>{
    return this.http.put<Employee06_Qualification>(`${this.apiServerUrl}/employeeDetailsQualification/update`, record);
  }

  public delete(record: Employee06_Qualification): Observable<Employee06_Qualification>{
    return this.http.put<Employee06_Qualification>(`${this.apiServerUrl}/employeeDetailsQualification/delete`, record);
  }

  public getQualificationByEmployeeId(employeeId: number): Observable<Employee06_Qualification>{
    return this.http.get<Employee06_Qualification>(`${this.apiServerUrl}/employeeDetailsQualification/employee-qualification/${employeeId}`);
  }
  public deleteQualification(employeeQualificationId: number){
    return this.http.delete(`${this.apiServerUrl}/employeeDetailsQualification/${employeeQualificationId}`);
  }
}
