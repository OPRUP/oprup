import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Renewingresidence } from '../renewing-residence/Renewingresidence';
import { RecruitmentCompany } from './RecruitmentCompany';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentCompanynyService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllRecruitmentCompany(): Observable<RecruitmentCompany[]>{
    return this.http.get<RecruitmentCompany[]>(`${this.apiServerUrl}/recruitmentCompany/all`);
  }

  public getRecruitmentCompanyyId(recruitmentCompanyId: number): Observable<RecruitmentCompany>{
    return this.http.get<RecruitmentCompany>(`${this.apiServerUrl}/recruitmentCompany/find/${recruitmentCompanyId}`);
  }


  public addRecruitmentCompany(recruitmentCompany: RecruitmentCompany): Observable<RecruitmentCompany>{
    return this.http.post<RecruitmentCompany>(`${this.apiServerUrl}/recruitmentCompany/add`, recruitmentCompany);
  }

  public updateRecruitmentCompany(recruitmentCompany: RecruitmentCompany): Observable<RecruitmentCompany>{
    return this.http.put<Renewingresidence>(`${this.apiServerUrl}/recruitmentCompany/update`, recruitmentCompany);
  }

  public deleteRecruitmentCompany(recruitmentCompany: RecruitmentCompany): Observable<RecruitmentCompany>{
    return this.http.put<RecruitmentCompany>(`${this.apiServerUrl}/recruitmentCompany/delete`, recruitmentCompany);
  }

}

