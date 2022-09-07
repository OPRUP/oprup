import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee05_Address } from './employee';

@Injectable({
  providedIn: 'root'
})
export class Employee05_AddressService {

  // constructor() { }
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public get(): Observable<Employee05_Address[]>{
    return this.http.get<Employee05_Address[]>(`${this.apiServerUrl}/employeeDetailsAddress/all`);
  }

  public getById(id: number): Observable<Employee05_Address>{
    return this.http.get<Employee05_Address>(`${this.apiServerUrl}/employeeDetailsAddress/find/${id}`);
  }

  public getAddressesByEmployeeId(employeeId: number): Observable<Employee05_Address>{
    return this.http.get<Employee05_Address>(`${this.apiServerUrl}/employeeDetailsAddress/employee-address/${employeeId}`);
  }


  public add(record: Employee05_Address): Observable<Employee05_Address>{
    return this.http.post<Employee05_Address>(`${this.apiServerUrl}/employeeDetailsAddress/add`, record);
  }

  public update(record: Employee05_Address): Observable<Employee05_Address>{
    return this.http.put<Employee05_Address>(`${this.apiServerUrl}/employeeDetailsAddress/update`, record);
  }

  public delete(record: Employee05_Address): Observable<Employee05_Address>{
    return this.http.put<Employee05_Address>(`${this.apiServerUrl}/employeeDetailsAddress/delete`, record);
  }

  public deleteAddress(addressId: number){
    return this.http.delete(`${this.apiServerUrl}/employeeDetailsAddress/${addressId}`);
  }
}
