import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CentralJob } from '../central-jobs/central-job';
import { JobTitle } from './job-title';

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getJobTitles(): Observable<JobTitle[]>{
    return this.http.get<JobTitle[]>(`${this.apiServerUrl}/jobTitle/all`);
  }

  public getJobTitleById(jobId: number): Observable<JobTitle>{
    return this.http.get<JobTitle>(`${this.apiServerUrl}/jobTitle/find/${jobId}`);
  }

  public getCentralJobs(): Observable<JobTitle[]>{
    return this.http.get<JobTitle[]>(`${this.apiServerUrl}/jobTitle/centralJob`);
  }


  public addJobTitle(jobTitle: JobTitle): Observable<JobTitle>{
    return this.http.post<JobTitle>(`${this.apiServerUrl}/jobTitle/add`, jobTitle);
  }


  public updateJobTitle(jobTitle: JobTitle): Observable<JobTitle>{
    return this.http.put<JobTitle>(`${this.apiServerUrl}/jobTitle/update`, jobTitle);
  }

  public deleteJobTitle(jobTitle: JobTitle): Observable<JobTitle>{
    return this.http.put<JobTitle>(`${this.apiServerUrl}/jobTitle/delete`, jobTitle);
  }

}
