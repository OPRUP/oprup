import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employeeProject } from './employeeProject';
import { project } from './project';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProjectsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEmployeeProject(): Observable<employeeProject[]>{
    return this.http.get<employeeProject[]>(`${this.apiServerUrl}/employeeProject/all`);
  }


  public addEmployeeProject(emploProjects: employeeProject): Observable<employeeProject>{
    return this.http.post<employeeProject>(`${this.apiServerUrl}/employeeProject/add`, emploProjects);
  }


  public getProject(): Observable<project[]>{
    return this.http.get<project[]>(`${this.apiServerUrl}/project/all`);
  }


  public updateEmployeeProject(employeeProjects: employeeProject): Observable<employeeProject>{
    return this.http.put<employeeProject>(`${this.apiServerUrl}/employeeProject/update`, employeeProjects);
  }


  public deleteEmployeeProject(employeeProjects: employeeProject): Observable<employeeProject>{
    return this.http.put<employeeProject>(`${this.apiServerUrl}/employeeProject/delete`, employeeProjects);
  }

  public getEmployeeProjectById(employeeProjectId: number): Observable<employeeProject>{
    return this.http.get<employeeProject>(`${this.apiServerUrl}/employeeProject/find/${employeeProjectId}`);
  }
  public getProjectByEmpId(employeeId: number): Observable<employeeProject>{
    return this.http.get<employeeProject>(`${this.apiServerUrl}/employeeProject/findEmp/${employeeId}`);
  }
   
}
