import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contract, ContractItem } from './Contract';


@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllContract(): Observable<Contract[]>{
    return this.http.get<Contract[]>(`${this.apiServerUrl}/contract/all`);
  }

  public getContractById(contractId: number): Observable<Contract>{
    return this.http.get<Contract>(`${this.apiServerUrl}/contract/find/${contractId}`);
  }


  public getContractitemById(contractId: number): Observable<Contract>{
    return this.http.get<Contract>(`${this.apiServerUrl}/contractItem/itemByContract/${contractId}`);
  }

  public addContract(contract: Contract): Observable<Contract>{
    return this.http.post<Contract>(`${this.apiServerUrl}/contract/add`, contract);
  }
  public addContractItems(contractItem:ContractItem): Observable<ContractItem>{
    return this.http.post<ContractItem>(`${this.apiServerUrl}/contractItem/add`, contractItem);
  }
  public getcontractItemBycontractId(contractId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/contractItem/itemByContract/${contractId}`);
  }
  public getcontractItemByItem(contractId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/item/findCode/${contractId}`);
  }

  public updateContract(contractId: number): Observable<Contract>{
    return this.http.put<Contract>(`${this.apiServerUrl}/contract/update`, contractId);
  }

  public deleteContract(contractId:number ): Observable<Contract>{
    return this.http.put<Contract>(`${this.apiServerUrl}/contract/delete`, contractId);
  }
  public countContract(): any{
    return this.http.get(`${this.apiServerUrl}/contract/count` );
  }

  public deleteContractItem(purchasingItemId: number): Observable<ContractItem>{
    return this.http.put<ContractItem>(`${this.apiServerUrl}/contractItem/delete`, purchasingItemId);
  }

  }