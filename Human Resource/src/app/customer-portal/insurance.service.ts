import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee10_HealthInsurance } from '../employees/employee';
import { ProjectEmdadat } from '../project-emdadat/project-emdadat';
import { employeeProject } from './employee-project';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAllProjectAndEmployee(): Observable<employeeProject[]>{
    return this.http.get<employeeProject[]>(`${this.apiServerUrl}/project/allProjectwithEmployee`);
  }
  public getById(id: number): Observable<Employee10_HealthInsurance>{
    return this.http.get<Employee10_HealthInsurance>(`${this.apiServerUrl}/employeeDetailsHealthInsurance/employee-health/${id}`);
  }
}
