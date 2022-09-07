import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee11_EmployedInformation } from './employee';

@Injectable({
  providedIn: 'root'
})
export class Employee11_EmployedInformationService {

  // constructor() { }
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public get(): Observable<Employee11_EmployedInformation[]>{
    return this.http.get<Employee11_EmployedInformation[]>(`${this.apiServerUrl}/employeeDetailsEmployedInformation/all`);
  }

  public getById(id: number): Observable<Employee11_EmployedInformation>{
    return this.http.get<Employee11_EmployedInformation>(`${this.apiServerUrl}/employeeDetailsEmployedInformation/find/${id}`);
  }

  public add(record: Employee11_EmployedInformation): Observable<Employee11_EmployedInformation>{
    return this.http.post<Employee11_EmployedInformation>(`${this.apiServerUrl}/employeeDetailsEmployedInformation/add`, record);
  }

  public update(record: Employee11_EmployedInformation): Observable<Employee11_EmployedInformation>{
    return this.http.put<Employee11_EmployedInformation>(`${this.apiServerUrl}/employeeDetailsEmployedInformation/update`, record);
  }

  public delete(record: Employee11_EmployedInformation): Observable<Employee11_EmployedInformation>{
    return this.http.put<Employee11_EmployedInformation>(`${this.apiServerUrl}/employeeDetailsEmployedInformation/delete`, record);
  }

  public getEmployedByEmployeeId(employeeId: number): Observable<Employee11_EmployedInformation>{
    return this.http.get<Employee11_EmployedInformation>(`${this.apiServerUrl}/employeeDetailsEmployedInformation/employee-employed/${employeeId}`);
  }
  public deleteEmployed(empId: number){
    return this.http.delete(`${this.apiServerUrl}/employeeDetailsEmployedInformation/${empId}`);
  }
  public getcode(id: number): Observable<Employee11_EmployedInformation>{
    return this.http.get<Employee11_EmployedInformation>(`${this.apiServerUrl}/employeeDetailsEmployedInformation/employee-code/${id}`);
  }
}
