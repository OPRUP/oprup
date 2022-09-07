import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeSalaryObject } from './employee-salary-object';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSalaryObjectService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEmployeeSalaryObjects(): Observable<EmployeeSalaryObject[]>{
    return this.http.get<EmployeeSalaryObject[]>(`${this.apiServerUrl}/employeeSalaryObject/all`);
  }

  public getEmployeeSalaryObjectById(EmployeeSalaryObjectId: number): Observable<EmployeeSalaryObject>{
    return this.http.get<EmployeeSalaryObject>(`${this.apiServerUrl}/employeeSalaryObject/find/${EmployeeSalaryObjectId}`);
  }

  public getEmployeeSalaryObjectByEmployeeId(employeeId: number): Observable<EmployeeSalaryObject>{
    return this.http.get<EmployeeSalaryObject>(`${this.apiServerUrl}/employeeSalaryObject/employee-salary-object/${employeeId}`);
  }

  public addEmployeeSalaryObject(employeeSalaryObject: EmployeeSalaryObject): Observable<EmployeeSalaryObject>{
    return this.http.post<EmployeeSalaryObject>(`${this.apiServerUrl}/employeeSalaryObject/add`, employeeSalaryObject);
  }

  public updateEmployeeSalaryObject(employeeSalaryObject: EmployeeSalaryObject): Observable<EmployeeSalaryObject>{
    return this.http.put<EmployeeSalaryObject>(`${this.apiServerUrl}/employeeSalaryObject/update`, employeeSalaryObject);
  }

  public deleteEmployeeSalaryObject(employeeSalaryObject: EmployeeSalaryObject): Observable<EmployeeSalaryObject>{
    return this.http.put<EmployeeSalaryObject>(`${this.apiServerUrl}/employeeSalaryObject/delete`, employeeSalaryObject);
  }

}
