import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SalaryObject } from './salary-object';

@Injectable({
  providedIn: 'root'
})
export class SalaryObjectService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getSalaryObjects(): Observable<SalaryObject[]>{
    return this.http.get<SalaryObject[]>(`${this.apiServerUrl}/salaryObject/all`);
  }

  public getSalaryObjectById(salaryObjectId: number): Observable<SalaryObject>{
    return this.http.get<SalaryObject>(`${this.apiServerUrl}/salaryObject/find/${salaryObjectId}`);
  }


  public addSalaryObject(salaryObject: SalaryObject): Observable<SalaryObject>{
    return this.http.post<SalaryObject>(`${this.apiServerUrl}/salaryObject/add`, salaryObject);
  }

  public updateSalaryObject(salaryObject: SalaryObject): Observable<SalaryObject>{
    return this.http.put<SalaryObject>(`${this.apiServerUrl}/salaryObject/update`, salaryObject);
  }

  public deleteSalaryObject(salaryObject: SalaryObject): Observable<SalaryObject>{
    return this.http.put<SalaryObject>(`${this.apiServerUrl}/salaryObject/delete`, salaryObject);
  }

}
