import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { travelingEmployee } from './travelingEmployee';

@Injectable({
  providedIn: 'root'
})
export class ServiceTravelingEmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllTravelingEmployee(): Observable<travelingEmployee[]>{
    return this.http.get<travelingEmployee[]>(`${this.apiServerUrl}/travelingEmployee/all`);
  }

  public getTravelingEmployeeById(travelingemployeeId: number): Observable<travelingEmployee>{
    return this.http.get<travelingEmployee>(`${this.apiServerUrl}/travelingEmployee/find/${travelingemployeeId}`);
  }


  public addTravelingEmployee(travelingemployees: travelingEmployee): Observable<travelingEmployee>{
    return this.http.post<travelingEmployee>(`${this.apiServerUrl}/travelingEmployee/add`, travelingemployees);
  }

  public updateTravelingEmployee(travelingemployees: number): Observable<travelingEmployee>{
    return this.http.put<travelingEmployee>(`${this.apiServerUrl}/travelingEmployee/update`, travelingemployees);
  }

  public deleteTravelingEmployee(travelingemployees: travelingEmployee): Observable<travelingEmployee>{
    return this.http.put<travelingEmployee>(`${this.apiServerUrl}/travelingEmployee/delete`, travelingemployees);
  }

}
