
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../employees/employee';
import { FinalExit } from './final-exit';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FinalExitService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getAllFinalExit(): Observable<FinalExit[]>{
    return this.http.get<FinalExit[]>(`${this.apiServerUrl}/finalExit/all`);
  }
  public getFinalExitById(finalExitId: number): Observable<FinalExit>{
    return this.http.get<FinalExit>(`${this.apiServerUrl}/finalExit/find/${finalExitId}`);
  }
  public getEmployees(): Observable<FinalExit[]>{
    return this.http.get<FinalExit[]>(`${this.apiServerUrl}/finalExit/employee`);
  }


  public addFinalExit(finalExit: FinalExit): Observable<FinalExit>{
    return this.http.post<FinalExit>(`${this.apiServerUrl}/finalExit/add`, finalExit);
  }

  public updateFinalExit(finalExit: FinalExit): Observable<FinalExit>{
    return this.http.put<FinalExit>(`${this.apiServerUrl}/finalExit/update`, finalExit);
  }

  public deleteFinalExit(finalExitId: number): Observable<FinalExit>{
    return this.http.delete<FinalExit>(`${this.apiServerUrl}/finalExit/delete/${finalExitId}`);
  }

  public approveFinalExit(finalExit: FinalExit): Observable<FinalExit>{
    return this.http.put<FinalExit>(`${this.apiServerUrl}/finalExit/approve`, finalExit);
  }


public rejectFinalExit(finalExit: FinalExit): Observable<FinalExit>{
  return this.http.put<FinalExit>(`${this.apiServerUrl}/finalExit/reject`, finalExit)

}
public FinalExit(): Observable<FinalExit>{
  return this.http.get<FinalExit>(`${this.apiServerUrl}/finalExit/Finalreject`)

}
public Finalapprove(): Observable<FinalExit>{
  return this.http.get<FinalExit>(`${this.apiServerUrl}/finalExit/Finalapprove`)

}

public getById(finalExitId: number): Observable<FinalExit>{
  return this.http.get<FinalExit>(`${this.apiServerUrl}/finalExit/approve/${finalExitId}`);
}

  public get(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }

}
