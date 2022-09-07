import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Qualification } from './qualification';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getQualifications(): Observable<Qualification[]>{
    return this.http.get<Qualification[]>(`${this.apiServerUrl}/qualification/all`);
  }

  public getQualificationById(qualificationId: number): Observable<Qualification>{
    return this.http.get<Qualification>(`${this.apiServerUrl}/qualification/find/${qualificationId}`);
  }


  public addQualification(qualification: Qualification): Observable<Qualification>{
    return this.http.post<Qualification>(`${this.apiServerUrl}/qualification/add`, qualification);
  }

  public updateQualification(qualification: Qualification): Observable<Qualification>{
    return this.http.put<Qualification>(`${this.apiServerUrl}/qualification/update`, qualification);
  }

  public deleteQualification(qualification: Qualification): Observable<Qualification>{
    return this.http.put<Qualification>(`${this.apiServerUrl}/qualification/delete/`, qualification);
  }


}
