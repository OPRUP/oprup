import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(`${this.apiServerUrl}/department/all`);
  }

  public getDepartmentById(departmentId: number): Observable<Department>{
    return this.http.get<Department>(`${this.apiServerUrl}/department/find/${departmentId}`);
  }

  public addDepartment(department: Department): Observable<Department>{
    return this.http.post<Department>(`${this.apiServerUrl}/department/add`, department);
  }

  public updateDepartment(department: Department): Observable<Department>{
    return this.http.put<Department>(`${this.apiServerUrl}/department/update`, department);
  }

  public deleteDepartment(department: Department): Observable<Department>{
    return this.http.put<Department>(`${this.apiServerUrl}/department/delete`, department);
  }
}
