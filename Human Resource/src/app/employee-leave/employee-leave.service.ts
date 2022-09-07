import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeLeave } from './employee-leave';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLeaveService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getEmployeeLeaves(): Observable<EmployeeLeave[]>{
    return this.http.get<EmployeeLeave[]>(`${this.apiServerUrl}/leave/all`);
  }

  public getEmployeeLeaveById(employeeLeaveId: number): Observable<EmployeeLeave>{
    return this.http.get<EmployeeLeave>(`${this.apiServerUrl}/leave/find/${employeeLeaveId}`);
  }

  public getEmployees(): Observable<EmployeeLeave[]>{
    return this.http.get<EmployeeLeave[]>(`${this.apiServerUrl}/leave/employee`);
  }

  public addEmployeeLeave(employeeLeave: EmployeeLeave): Observable<EmployeeLeave>{
    return this.http.post<EmployeeLeave>(`${this.apiServerUrl}/leave/add`, employeeLeave);
  }

  public updateEmployeeLeave(employeeLeave: EmployeeLeave): Observable<EmployeeLeave>{
    return this.http.put<EmployeeLeave>(`${this.apiServerUrl}/leave/update`, employeeLeave);
  }

  public deleteEmployeeLeave(employeeLeaveId: number): Observable<EmployeeLeave>{
    return this.http.delete<EmployeeLeave>(`${this.apiServerUrl}/leave/delete/${employeeLeaveId}`);
  }

}
