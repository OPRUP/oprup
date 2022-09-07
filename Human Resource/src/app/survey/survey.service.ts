import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { survey } from './survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllSurvey(): Observable<survey[]>{
    return this.http.get<survey[]>(`${this.apiServerUrl}/survey/all`);
  }


  public addSurvey(survey: survey): Observable<survey>{
    return this.http.post<survey>(`${this.apiServerUrl}/survey/add`, survey);
  }
}
