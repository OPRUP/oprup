import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Taskeen } from '../Taskeen/Taskeen';
import { Transportation } from './Transportation';

@Injectable({
  providedIn: 'root'
})
export class TransportationService {
  private apiServerUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) { }
public getAllTransportation(): Observable<Transportation[]>{
  return this.http.get<Transportation[]>(`${this.apiServerUrl}/transportation/all`);
}

public getTransportationById(transportationMeanId: number): Observable<Transportation>{
  return this.http.get<Transportation>(`${this.apiServerUrl}/transportation/find/${transportationMeanId}`);
}


public addTransportation(transportation: Transportation): Observable<Transportation>{
  return this.http.post<Transportation>(`${this.apiServerUrl}/transportation/add`, transportation);
}

public updateTransportation(transportationMeanId: number): Observable<Transportation>{
  return this.http.put<Transportation>(`${this.apiServerUrl}/transportation/update`, transportationMeanId);
}

public deleteTransportation(transportationMeanId:number ): Observable<Transportation>{
  return this.http.put<Transportation>(`${this.apiServerUrl}/transportation/delete`, transportationMeanId);
}

}
