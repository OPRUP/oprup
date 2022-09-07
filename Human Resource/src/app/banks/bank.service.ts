import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bank } from './bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getBanks(): Observable<Bank[]>{
    return this.http.get<Bank[]>(`${this.apiServerUrl}/bank/all`);
  }

  public getBankById(bankId: number): Observable<Bank>{
    return this.http.get<Bank>(`${this.apiServerUrl}/bank/find/${bankId}`);
  }

  public addBank(bank: Bank): Observable<Bank>{
    return this.http.post<Bank>(`${this.apiServerUrl}/bank/add`, bank);
  }

  public updateBank(bank: Bank): Observable<Bank>{
    return this.http.put<Bank>(`${this.apiServerUrl}/bank/update`, bank);
  }

  public deleteBank(bank: Bank): Observable<Bank>{
    return this.http.put<Bank>(`${this.apiServerUrl}/bank/delete`, bank);
  }

}
