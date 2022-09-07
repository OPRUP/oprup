import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coa } from './coa';

@Injectable({
  providedIn: 'root'
})
export class CoaService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getCoa(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/chartAccount/all`);
  }
  public addAcount(coa: Coa): Observable<Coa>{
    return this.http.post<Coa>(`${this.apiServerUrl}/chartAccount/add`, coa);
  }
  public getAccountById(accountId: number): Observable<Coa>{
    return this.http.get<Coa>(`${this.apiServerUrl}/chartAccount/find/${accountId}`);
  }
  public getAccountsByParent(ParentId: number): Observable<Coa[]>{
    return this.http.get<Coa[]>(`${this.apiServerUrl}/chartAccount/findSubParent/${ParentId}`);
  }
  public getAccountByName(accountName: string): Observable<Coa>{
    return this.http.get<Coa>(`${this.apiServerUrl}/chartAccount/findName/${accountName}`);
  }
  public getAccountByType(accountType: string): Observable<Coa>{
    return this.http.get<Coa>(`${this.apiServerUrl}/chartAccount/findType/${accountType}`);
  }
  public updateAccount(accountId: number): Observable<Coa>{
    return this.http.put<Coa>(`${this.apiServerUrl}/chartAccount/update`, accountId);
  }

  public getAccountByCode(accountCode: string): Observable<Coa>{
    return this.http.get<Coa>(`${this.apiServerUrl}/chartAccount/findCode/${accountCode}`);
  }
   public getAccountByParent(accountId: number): Observable<Coa[]>{
    return this.http.get<Coa[]>(`${this.apiServerUrl}/chartAccount/findParent/${accountId}`);
  }

}
