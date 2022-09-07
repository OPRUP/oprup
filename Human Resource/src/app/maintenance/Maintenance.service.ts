import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Maintenance } from './Maintenance';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllMaintenance(): Observable<Maintenance[]>{
    return this.http.get<Maintenance[]>(`${this.apiServerUrl}/maintenance/all`);
  }

  public getMaintenanceById(maintenanceId: number): Observable<Maintenance>{
    return this.http.get<Maintenance>(`${this.apiServerUrl}/maintenance/find/${maintenanceId}`);
  }


  public addMaintenance(maintenance: Maintenance): Observable<Maintenance>{
    return this.http.post<Maintenance>(`${this.apiServerUrl}/maintenance/add`, maintenance);
  }

  public updateMaintenance(maintenanceId: number): Observable<Maintenance>{
    return this.http.put<Maintenance>(`${this.apiServerUrl}/maintenance/update`, maintenanceId);
  }

  public deleteMaintenance(maintenanceId:number ): Observable<Maintenance>{
    return this.http.put<Maintenance>(`${this.apiServerUrl}/maintenance/delete`, maintenanceId);
  }

}
