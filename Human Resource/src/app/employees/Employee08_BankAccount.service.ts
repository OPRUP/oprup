import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee08_BankAccount } from './employee';

@Injectable({
  providedIn: 'root'
})
export class Employee08_BankAccountService {

  // constructor() { }
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public get(): Observable<Employee08_BankAccount[]>{
    return this.http.get<Employee08_BankAccount[]>(`${this.apiServerUrl}/employeeDetailsBank/all`);
  }

  public getById(id: number): Observable<Employee08_BankAccount>{
    return this.http.get<Employee08_BankAccount>(`${this.apiServerUrl}/employeeDetailsBank/find/${id}`);
  }

  public add(record: Employee08_BankAccount): Observable<Employee08_BankAccount>{
    return this.http.post<Employee08_BankAccount>(`${this.apiServerUrl}/employeeDetailsBank/add`, record);
  }

  public update(record: Employee08_BankAccount): Observable<Employee08_BankAccount>{
    return this.http.put<Employee08_BankAccount>(`${this.apiServerUrl}/employeeDetailsBank/update`, record);
  }

  public delete(record: Employee08_BankAccount): Observable<Employee08_BankAccount>{
    return this.http.put<Employee08_BankAccount>(`${this.apiServerUrl}/employeeDetailsBank/delete`, record);
  }

  public getBankByEmployeeId(employeeId: number): Observable<Employee08_BankAccount>{
    return this.http.get<Employee08_BankAccount>(`${this.apiServerUrl}/employeeDetailsBank/employee-bank/${employeeId}`);
  }
  public deleteBank(empBankId: number){
    return this.http.delete(`${this.apiServerUrl}/employeeDetailsBank/${empBankId}`);
  }
}
