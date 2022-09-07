import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee, Employee03_Document } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public get(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }

  public getById(employeeId: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.apiServerUrl}/employee/find/${employeeId}`);
  }

  public add(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
  }

  public update(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
  }

  public delete(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/delete`, employee);
  }

}

// export class Employee03DocumentService {

//   // constructor() { }
//   private apiServerUrl = environment.apiBaseUrl;

//   constructor(private http: HttpClient) { }

//   public get(): Observable<Employee03_Document[]>{
//     return this.http.get<Employee03_Document[]>(`${this.apiServerUrl}/employeeDetailsDocument/all`);
//   }

//   public getById(id: number): Observable<Employee03_Document>{
//     return this.http.get<Employee03_Document>(`${this.apiServerUrl}/employeeDetailsDocument/find/${id}`);
//   }

//   public add(record: Employee03_Document): Observable<Employee03_Document>{
//     return this.http.post<Employee03_Document>(`${this.apiServerUrl}/employeeDetailsDocument/add`, record);
//   }

//   public update(record: Employee03_Document): Observable<Employee03_Document>{
//     return this.http.put<Employee03_Document>(`${this.apiServerUrl}/employeeDetailsDocument/update`, record);
//   }

//   public delete(record: Employee03_Document): Observable<Employee03_Document>{
//     return this.http.put<Employee03_Document>(`${this.apiServerUrl}/employeeDetailsDocument/delete`, record);
//   }
// }
