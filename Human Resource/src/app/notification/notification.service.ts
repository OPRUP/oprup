import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { residenceNotification } from '../shared/services/residenceNotification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiServerUrl = environment.apiBaseUrl

  constructor(private http:HttpClient) { }
  public getNotification():Observable<Notification[]>{
    return this.http.get<Notification[]>(`${this.apiServerUrl}/employeeContract/notification`)
  }
  public getResNotification():Observable<residenceNotification[]>{

    return this.http.get<residenceNotification[]>(`${this.apiServerUrl}/hokome/notification`)
   }
}
