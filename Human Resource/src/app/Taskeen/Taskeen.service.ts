import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Taskeen } from './Taskeen';

@Injectable({
  providedIn: 'root'
})
export class TaskeenService {
  private apiServerUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) { }
public getAllTaskeen(): Observable<Taskeen[]>{
  return this.http.get<Taskeen[]>(`${this.apiServerUrl}/taskeen/all`);
}

public getTaskeenById(habitationId: number): Observable<Taskeen>{
  return this.http.get<Taskeen>(`${this.apiServerUrl}/taskeen/find/${habitationId}`);
}


public addTaskeen(taskeen: Taskeen): Observable<Taskeen>{
  return this.http.post<Taskeen>(`${this.apiServerUrl}/taskeen/add`, taskeen);
}

public updateTaskeen(habitationId: number): Observable<Taskeen>{
  return this.http.put<Taskeen>(`${this.apiServerUrl}/taskeen/update`, habitationId);
}

public deleteTaskeen(habitationId:number ): Observable<Taskeen>{
  return this.http.put<Taskeen>(`${this.apiServerUrl}/taskeen/delete`, habitationId);
}

}
