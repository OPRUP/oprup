import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skiprequest } from './Skiprequest';

@Injectable({
  providedIn: 'root'
})
export class SkiprequestService {


  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllSkiprequest(): Observable<Skiprequest[]>{
    return this.http.get<Skiprequest[]>(`${this.apiServerUrl}/skipRequest/all`);
  }

  public getSkiprequestById(skipRequestId: number): Observable<Skiprequest>{
    return this.http.get<Skiprequest>(`${this.apiServerUrl}/skipRequest/find/${skipRequestId}`);
  }


  public addSkiprequest(skipRequest: Skiprequest): Observable<Skiprequest>{
    return this.http.post<Skiprequest>(`${this.apiServerUrl}/skipRequest/add`, skipRequest);
  }

  public updateSkiprequest(skipRequest: Skiprequest): Observable<Skiprequest>{
    return this.http.put<Skiprequest>(`${this.apiServerUrl}/skipRequest/update`, skipRequest);
  }

  public deleteSkiprequest(skipRequest: Skiprequest): Observable<Skiprequest>{
    return this.http.put<Skiprequest>(`${this.apiServerUrl}/skipRequest/delete`, skipRequest);
  }

}

