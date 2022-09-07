import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Slip } from './slip';

@Injectable({
  providedIn: 'root'
})
export class SlipService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }


  public addSlip(slip: Slip): Observable<Slip>{
    return this.http.post<Slip>(`${this.apiServerUrl}/slip/add`, slip);
  }

  public getSlipsOfContract(contractId: number): Observable<Slip>{
    return this.http.get<Slip>(`${this.apiServerUrl}/slip/employee-contract-slip/${contractId}`);
  }

  public getSlipBySlip(slipId: number): Observable<Slip>{
    // return this.http.put<Slip>(`${this.apiServerUrl}/slip/pay-slip`, slipId);
    return this.http.get<Slip>(`${this.apiServerUrl}/slip/pay-slip/${slipId}`);
  }







}
