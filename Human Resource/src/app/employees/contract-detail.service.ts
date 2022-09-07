import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContractDetail } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getContractDetailsByContractId(contractId: number): Observable<ContractDetail>{
    return this.http.get<ContractDetail>(`${this.apiServerUrl}/contractDetail/contract-details/${contractId}`);
  }

  public getContractDetailsByEmployeeId(employeeId: number): Observable<ContractDetail>{
    return this.http.get<ContractDetail>(`${this.apiServerUrl}/contractDetail/employee-contract-details/${employeeId}`);
  }

  public add(record: ContractDetail): Observable<ContractDetail>{
    return this.http.post<ContractDetail>(`${this.apiServerUrl}/contractDetail/add`, record);
  }
  public delete(record: ContractDetail): Observable<ContractDetail>{
    return this.http.put<ContractDetail>(`${this.apiServerUrl}/contractDetail/delete`, record);
  }
}
