import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {SiteVisits} from './site-visits'
@Injectable({
  providedIn: 'root'
})
export class siteVisitsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllVisits(): Observable<SiteVisits[]>{
    return this.http.get<SiteVisits[]>(`${this.apiServerUrl}/siteVisits/all`);
  }

  public getVisitById(visitId: number): Observable<SiteVisits>{
    return this.http.get<SiteVisits>(`${this.apiServerUrl}/siteVisits/find/${visitId}`);
  }


  public addVisits(visits: SiteVisits): Observable<SiteVisits>{
    return this.http.post<SiteVisits>(`${this.apiServerUrl}/siteVisits/add`, visits);
  }

  public updateVisits(visitId: number): Observable<SiteVisits>{
    return this.http.put<SiteVisits>(`${this.apiServerUrl}/siteVisits/update`, visitId);
  }

  public deleteVisit(visitId: number): Observable<SiteVisits>{
    return this.http.put<SiteVisits>(`${this.apiServerUrl}/siteVisits/delete`, visitId);
  }
  public countVisit(): any{
    return this.http.get(`${this.apiServerUrl}/siteVisits/count`);
  }


}
