import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee09_Contract } from './employee';

@Injectable({
  providedIn: 'root'
})
export class Employee09_ContractService {

  // constructor() { }
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public get(): Observable<Employee09_Contract[]>{
    return this.http.get<Employee09_Contract[]>(`${this.apiServerUrl}/employeeContract/all`);
  }

  public getById(id: number): Observable<Employee09_Contract>{
    return this.http.get<Employee09_Contract>(`${this.apiServerUrl}/employeeContract/find/${id}`);
  }

  public getContractsByEmployeeId(employeeId: number): Observable<Employee09_Contract>{
    return this.http.get<Employee09_Contract>(`${this.apiServerUrl}/employeeContract/employee-contract/${employeeId}`);
  }

  public add(record: Employee09_Contract): Observable<Employee09_Contract>{
    return this.http.post<Employee09_Contract>(`${this.apiServerUrl}/employeeContract/add`, record);
  }

  public update(record: Employee09_Contract): Observable<Employee09_Contract>{
    return this.http.put<Employee09_Contract>(`${this.apiServerUrl}/employeeContract/update`, record);
  }

  public delete(record: Employee09_Contract): Observable<Employee09_Contract>{
    return this.http.put<Employee09_Contract>(`${this.apiServerUrl}/employeeContract/delete`, record);
  }

public deleteContract(contractId: number){
    return this.http.delete(`${this.apiServerUrl}/employeeContract/${contractId}`);
  }
}
