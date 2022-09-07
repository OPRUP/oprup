import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Companies } from './companies';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public get(): Observable<Companies[]>{
    return this.http.get<Companies[]>(`${this.apiServerUrl}/company/all`);
  }

  public getById(companyId: number): Observable<Companies>{
    return this.http.get<Companies>(`${this.apiServerUrl}/company/find/${companyId}`);
  }


  public add(company: Companies): Observable<Companies>{
    return this.http.post<Companies>(`${this.apiServerUrl}/company/add`, company);
  }

  public update(company: Companies): Observable<Companies>{
    return this.http.put<Companies>(`${this.apiServerUrl}/company/update`, company);
  }

  public delete(company: Companies): Observable<Companies>{
    return this.http.put<Companies>(`${this.apiServerUrl}/company/delete`, company);
  }

}
