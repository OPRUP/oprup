import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee07_WorkExperience } from './employee';

@Injectable({
  providedIn: 'root'
})
export class Employee07_WorkExperienceService {

  // constructor() { }
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public get(): Observable<Employee07_WorkExperience[]>{
    return this.http.get<Employee07_WorkExperience[]>(`${this.apiServerUrl}/employeeDetailsExperience/all`);
  }

  public getById(id: number): Observable<Employee07_WorkExperience>{
    return this.http.get<Employee07_WorkExperience>(`${this.apiServerUrl}/employeeDetailsExperience/find/${id}`);
  }

  public getExperiencesByEmployeeId(employeeId: number): Observable<Employee07_WorkExperience>{
    return this.http.get<Employee07_WorkExperience>(`${this.apiServerUrl}/employeeDetailsExperience/employee-experience/${employeeId}`);
  }

  public add(record: Employee07_WorkExperience): Observable<Employee07_WorkExperience>{
    return this.http.post<Employee07_WorkExperience>(`${this.apiServerUrl}/employeeDetailsExperience/add`, record);
  }

  public update(record: Employee07_WorkExperience): Observable<Employee07_WorkExperience>{
    return this.http.put<Employee07_WorkExperience>(`${this.apiServerUrl}/employeeDetailsExperience/update`, record);
  }

  public delete(record: Employee07_WorkExperience): Observable<Employee07_WorkExperience>{
    return this.http.put<Employee07_WorkExperience>(`${this.apiServerUrl}/employeeDetailsExperience/delete`, record);
  }

  public deleteExperience(experienceId: number){
    return this.http.delete(`${this.apiServerUrl}/employeeDetailsExperience/${experienceId}`);
  }
}
