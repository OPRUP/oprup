import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Major } from './major';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getMajors(): Observable<Major[]>{
    return this.http.get<Major[]>(`${this.apiServerUrl}/major/all`);
  }

  public getMajorById(majorId: number): Observable<Major>{
    return this.http.get<Major>(`${this.apiServerUrl}/major/find/${majorId}`);
  }


  public addMajor(major: Major): Observable<Major>{
    return this.http.post<Major>(`${this.apiServerUrl}/major/add`, major);
  }

  public updateMajor(major: Major): Observable<Major>{
    return this.http.put<Major>(`${this.apiServerUrl}/major/update`, major);
  }

  public deleteMajor(major: Major): Observable<Major>{
    return this.http.put<Major>(`${this.apiServerUrl}/major/delete`, major);
  }


}
