import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InsuranceCompany } from './insurance-company';

@Injectable({
  providedIn: 'root'
})
export class InsuranceCompanyService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getInsuranceCompanies(): Observable<InsuranceCompany[]>{
    return this.http.get<InsuranceCompany[]>(`${this.apiServerUrl}/insuranceCompany/all`);
  }

  public getInsuranceCompanyById(InsuranceCompanyId: number): Observable<InsuranceCompany>{
    return this.http.get<InsuranceCompany>(`${this.apiServerUrl}/insuranceCompany/find/${InsuranceCompanyId}`);
  }


  public addInsuranceCompany(insuranceCompany: InsuranceCompany): Observable<InsuranceCompany>{
    return this.http.post<InsuranceCompany>(`${this.apiServerUrl}/insuranceCompany/add`, insuranceCompany);
  }

  public updateInsuranceCompany(insuranceCompany: InsuranceCompany): Observable<InsuranceCompany>{
    return this.http.put<InsuranceCompany>(`${this.apiServerUrl}/insuranceCompany/update`, insuranceCompany);
  }

  public deleteInsuranceCompany(insuranceCompany: InsuranceCompany): Observable<InsuranceCompany>{
    return this.http.put<InsuranceCompany>(`${this.apiServerUrl}/insuranceCompany/delete`, insuranceCompany);
  }

}
