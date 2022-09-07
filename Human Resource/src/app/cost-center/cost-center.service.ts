import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CostCenter } from './cost-center';

@Injectable({
  providedIn: 'root'
})
export class CostCenterService {
  private apiServerUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) { }
public getAllCostCenter(): Observable<CostCenter[]>{
  return this.http.get<CostCenter[]>(`${this.apiServerUrl}/costCenter/all`);
}

public getCostCenterById(costCenterId: number): Observable<CostCenter>{
  return this.http.get<CostCenter>(`${this.apiServerUrl}/costCenter/find/${costCenterId}`);
}


public addCostCenter(costCenter: CostCenter): Observable<CostCenter>{
  return this.http.post<CostCenter>(`${this.apiServerUrl}/costCenter/add`, costCenter);
}

public updateCostCenter(costCenterId: number): Observable<CostCenter>{
  return this.http.put<CostCenter>(`${this.apiServerUrl}/costCenter/update`, costCenterId);
}

public deleteCostCenter(costCenterId:number ): Observable<CostCenter>{
  return this.http.put<CostCenter>(`${this.apiServerUrl}/costCenter/delete`, costCenterId);
}
public countCostCenter(): any{
  return this.http.get(`${this.apiServerUrl}/costCenter/count` );
}

}
