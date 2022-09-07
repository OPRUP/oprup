import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { project } from '../employee-projects/project';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getContractsByUserId(userId: number): Observable<project>{
    return this.http.get<project>(`${this.apiServerUrl}/project/customer-projects/${userId}`);
  }
  public getContracts(): Observable<project>{
    return this.http.get<project>(`${this.apiServerUrl}/project/all`);
  }
}
