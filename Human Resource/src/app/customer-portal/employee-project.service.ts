import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employeeProject } from '../employee-projects/employeeProject';
import { project } from '../employee-projects/project';
import { ProjectEmdadat } from '../project-emdadat/project-emdadat';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProjectService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAllProject(): Observable<ProjectEmdadat[]>{
    return this.http.get<ProjectEmdadat[]>(`${this.apiServerUrl}/project/all`);
  }
  public getEmployeeProjectById(employeeProjectId: number): Observable<employeeProject>{
    return this.http.get<employeeProject>(`${this.apiServerUrl}/employeeProject/employee-project/${employeeProjectId}`);
  }
}
