import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoomsTaskeen } from './RoomsTaskeen';

@Injectable({
  providedIn: 'root'
})
export class RoomsTaskeenService {
  private apiServerUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) { }
public getAllRoomsTaskeen(): Observable<RoomsTaskeen[]>{
  return this.http.get<RoomsTaskeen[]>(`${this.apiServerUrl}/roomsTaskeen/all`);
}

public getRoomsTaskeenById(roomID: number): Observable<RoomsTaskeen>{
  return this.http.get<RoomsTaskeen>(`${this.apiServerUrl}/roomsTaskeen/find/${roomID}`);
}


public addRoomsTaskeen(roomsTaskeen: RoomsTaskeen): Observable<RoomsTaskeen>{
  return this.http.post<RoomsTaskeen>(`${this.apiServerUrl}/roomsTaskeen/add`, roomsTaskeen);
}

public updateRoomsTaskeen(roomID: number): Observable<RoomsTaskeen>{
  return this.http.put<RoomsTaskeen>(`${this.apiServerUrl}/roomsTaskeen/update`, roomID);
}

public deleteRoomsTaskeen(roomID:number ): Observable<RoomsTaskeen>{
  return this.http.put<RoomsTaskeen>(`${this.apiServerUrl}/roomsTaskeen/delete`, roomID);
}

}
