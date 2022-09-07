import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { notification } from './notification';
import { residenceNotification } from './residenceNotification';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  taskList!: AngularFireList<any>;

  private apiServerUrl = environment.apiBaseUrl;

  constructor( private firebasedb:AngularFireDatabase ,private http: HttpClient) { }
  getTaskList() {
    this.taskList = this.firebasedb.list('taskList');
    return this.taskList;
  }
  addTask(task: string) {
    this.taskList.push({
      name: task,
      isChecked: false
    });
  }
  checkOrUnCheckTask(key: string, flag: boolean) {
    this.taskList.update(key, { isChecked: flag });
  }

  removeTask(task: string) {
    this.taskList.remove(task);
  }

  public getNotification(): Observable<notification[]>{
    return this.http.get<notification[]>(`${this.apiServerUrl}/employeeContract/notification`);
  }
  public getResNotification():Observable<residenceNotification[]>{

    return this.http.get<residenceNotification[]>(`${this.apiServerUrl}/hokome/notification`)
   }

}
