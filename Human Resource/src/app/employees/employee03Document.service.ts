import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee03_Document } from './employee';

@Injectable({
  providedIn: 'root'
})

export class Employee03DocumentService {

  // constructor() { }
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public get(): Observable<Employee03_Document[]>{
    return this.http.get<Employee03_Document[]>(`${this.apiServerUrl}/employeeDetailsDocument/all`);
  }

  public getById(id: number): Observable<Employee03_Document>{
    return this.http.get<Employee03_Document>(`${this.apiServerUrl}/employeeDetailsDocument/find/${id}`);
  }

  public getDocumentsByEmployeeId(employeeId: number): Observable<Employee03_Document>{
    return this.http.get<Employee03_Document>(`${this.apiServerUrl}/employeeDetailsDocument/employee-document/${employeeId}`);
  }

  public add(record: Employee03_Document): Observable<Employee03_Document>{
    return this.http.post<Employee03_Document>(`${this.apiServerUrl}/employeeDetailsDocument/add`, record);
  }

  public update(record: Employee03_Document): Observable<Employee03_Document>{
    return this.http.put<Employee03_Document>(`${this.apiServerUrl}/employeeDetailsDocument/update`, record);
  }

  public delete(record: Employee03_Document): Observable<Employee03_Document>{
    return this.http.put<Employee03_Document>(`${this.apiServerUrl}/employeeDetailsDocument/delete`, record);
  }



 public deleteDocument(documentId: number){
    return this.http.delete(`${this.apiServerUrl}/employeeDetailsDocument/${documentId}`);
  }


}

