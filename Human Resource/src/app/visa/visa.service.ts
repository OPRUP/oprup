import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Visa } from './visa';

@Injectable({
  providedIn: 'root'
})
export class VisaService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }


  public get(): Observable<Visa[]>{
    return this.http.get<Visa[]>(`${this.apiServerUrl}/visa/all`);
  }

  public getById(visaId: number): Observable<Visa>{
    return this.http.get<Visa>(`${this.apiServerUrl}/visa/find/${visaId}`);
  }


  public add(visa: Visa): Observable<Visa>{
    return this.http.post<Visa>(`${this.apiServerUrl}/visa/add`, visa);
  }

  public update(visa: Visa): Observable<Visa>{
    return this.http.put<Visa>(`${this.apiServerUrl}/visa/update`, visa);
  }

  public delete(visa: Visa): Observable<Visa>{
    return this.http.put<Visa>(`${this.apiServerUrl}/visa/delete`, visa);
  }
}
