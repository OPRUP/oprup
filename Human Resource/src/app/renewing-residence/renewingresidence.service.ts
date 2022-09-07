import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Renewingresidence } from './Renewingresidence';

@Injectable({
  providedIn: 'root'
})
export class RenewingresidenceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllRenewingresidence(): Observable<Renewingresidence[]>{
    return this.http.get<Renewingresidence[]>(`${this.apiServerUrl}/renewingResidence/all`);
  }

  public getRenewingresidenceById(renewingResidenceId: number): Observable<Renewingresidence>{
    return this.http.get<Renewingresidence>(`${this.apiServerUrl}/renewingResidence/find/${renewingResidenceId}`);
  }


  public addRenewingresidence(renewingResidence: Renewingresidence): Observable<Renewingresidence>{
    return this.http.post<Renewingresidence>(`${this.apiServerUrl}/renewingResidence/add`, renewingResidence);
  }

  public updateRenewingresidence(renewingResidence: Renewingresidence): Observable<Renewingresidence>{
    return this.http.put<Renewingresidence>(`${this.apiServerUrl}/renewingResidence/update`, renewingResidence);
  }

  public deleteRenewingresidence(renewingResidence: Renewingresidence): Observable<Renewingresidence>{
    return this.http.put<Renewingresidence>(`${this.apiServerUrl}/renewingResidence/delete`, renewingResidence);
  }

}

