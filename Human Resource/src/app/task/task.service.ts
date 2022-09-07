import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itask } from './itask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  // public getAllTasks(): Observable<Itask[]>{
  //   return this.http.get<Itask[]>(`${this.apiServerUrl}/UserTask/all`);
  // }
  public getAllTask(): Observable<Itask[]>{
    return this.http.get<Itask[]>(`${this.apiServerUrl}/UserTask/all`);
  }
  public getTaskByEmployee(employeeId :number): Observable<Itask[]>{
    return this.http.get<Itask[]>(`${this.apiServerUrl}/UserTask/task/${employeeId}`);
  }
  public getByTaskId(taskId :number): Observable<Itask>{
    return this.http.get<Itask>(`${this.apiServerUrl}/UserTask/find/${taskId}`);
  }
  public addUserTask(task: Itask): Observable<Itask>{
    debugger
    return this.http.post<Itask>(`${this.apiServerUrl}/UserTask/add`, task);
  }
  public updateUserTask(task: Itask): Observable<Itask>{
    
    return this.http.put<Itask>(`${this.apiServerUrl}/UserTask/update`, task);
  }
  public deleteUserTask(task: Itask): Observable<Itask>{
    
    return this.http.put<Itask>(`${this.apiServerUrl}/UserTask/delete`, task);
  }
  
}
