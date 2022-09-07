
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TopManagement } from './top-management';


@Injectable({
  providedIn: 'root'
})
export class TopManagementsService {
   private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public get(): Observable<TopManagement[]>{
    return this.http.get<TopManagement[]>(`${this.apiServerUrl}/topManagement/all`);
  }

  public getById(topManagementId: number): Observable<TopManagement>{
    return this.http.get<TopManagement>(`${this.apiServerUrl}/topManagement/find/${topManagementId}`);
  }


  public add(topManagement: TopManagement): Observable<TopManagement>{
    return this.http.post<TopManagement>(`${this.apiServerUrl}/topManagement/add`, topManagement);
  }

  public update(topManagement: TopManagement): Observable<TopManagement>{
    return this.http.put<TopManagement>(`${this.apiServerUrl}/topManagement/update`, topManagement);
  }

  public deleteTopManagement(topManagement: TopManagement): Observable<TopManagement>{
    return this.http.put<TopManagement>(`${this.apiServerUrl}/topManagement/delete`, topManagement);
  }




}
