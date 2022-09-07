import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CentralJob } from './central-job';

@Injectable({
  providedIn: 'root'
})
export class CentralJobService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getCentralJobs(): Observable<CentralJob[]>{
    return this.http.get<CentralJob[]>(`${this.apiServerUrl}/centralJob/all`);
  }

  public getCentralJobById(centralJobId: number): Observable<CentralJob>{
    return this.http.get<CentralJob>(`${this.apiServerUrl}/centralJob/find/${centralJobId}`);
  }


  public addCentralJob(centralJob: CentralJob): Observable<CentralJob>{
    return this.http.post<CentralJob>(`${this.apiServerUrl}/centralJob/add`, centralJob);
  }

  public updateCentralJob(centralJob: CentralJob): Observable<CentralJob>{
    return this.http.put<CentralJob>(`${this.apiServerUrl}/centralJob/update`, centralJob);
  }

  public deleteCentralJob(centralJob: CentralJob): Observable<CentralJob>{
    return this.http.put<CentralJob>(`${this.apiServerUrl}/centralJob/delete`, centralJob);
  }

}
