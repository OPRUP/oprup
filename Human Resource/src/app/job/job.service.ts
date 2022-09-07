
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Job } from './job';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getAllJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(`${this.apiServerUrl}/job/all`);
  }

  public getJobById(jobId: number): Observable<Job>{
    return this.http.get<Job>(`${this.apiServerUrl}/job/find/${jobId}`);
  }


  public addJob(job: Job): Observable<Job>{
    return this.http.post<Job>(`${this.apiServerUrl}/job/add`, job);
  }

  public updateJob(jobId: number): Observable<Job>{
    return this.http.put<Job>(`${this.apiServerUrl}/job/update`, jobId);
  }

  public deleteJob(jobId: number): Observable<Job>{
    return this.http.put<Job>(`${this.apiServerUrl}/job/delete`, jobId);
  }

}
