import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllCustomer(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.apiServerUrl}/customer/all`);
  }
  public getAllCustomerTransfer(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.apiServerUrl}/customer/allCustomers`);
  }

  public getCustomerById(customerId: number): Observable<Customer>{
    return this.http.get<Customer>(`${this.apiServerUrl}/customer/find/${customerId}`);
  }


  public addCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(`${this.apiServerUrl}/customer/add`, customer);
  }

  public updateCustomer(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${this.apiServerUrl}/customer/update`, customer);
  }

  public deleteCustomer(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${this.apiServerUrl}/customer/delete`, customer);
  }
  public countCustomer(): any{
    return this.http.get(`${this.apiServerUrl}/customer/count` );
  }

  public getAllQualifiedCustomer(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.apiServerUrl}/customer/getQualified`);
  }

}
