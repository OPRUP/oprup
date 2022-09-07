import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contract } from '../contract/Contract';


@Injectable({
  providedIn: 'root'
})
export class ExtensionsService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public getAllContractExtension(): Observable<Contract[]>{
    return this.http.get<Contract[]>(`${this.apiServerUrl}/contract/allByExtension`);
  }

  public updateContract(contractId: any): Observable<Contract>{
    return this.http.put<Contract>(`${this.apiServerUrl}/contract/update`, contractId);
  }

  public findbyCustomerID(customerId: number): Observable<Contract>{
    return this.http.get<Contract>(`${this.apiServerUrl}/contract/findByCustomer/${customerId}`);
  }
  public getcontractItemByItem(contractId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/item/findCode/${contractId}`);
  }

  public getcontractExtensionById(contractId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/contract/findExtension/${contractId}`);
  }
  public deleteContract(contractId:number ): Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/contract/delete`, contractId);
  }
  public getcontractItemExtensionBycontractId(contractId: number): Observable<Contract[]>{
    return this.http.get<Contract[]>(`${this.apiServerUrl}/contractItem/findContractItemExtension/${contractId}`);
  }
}
