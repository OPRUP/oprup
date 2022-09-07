import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../employees/employee';
 import { ResidenceCardRequest } from './residence-card-request';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ResidenceCardRequestService {


  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }



  public getAllResidenceCardRequest(): Observable<ResidenceCardRequest[]>{
    return this.http.get<ResidenceCardRequest[]>(`${this.apiServerUrl}/ResidenceCardRequest/all`);
  }

  public getResidenceCardRequestById(residenceCardRequestId: number): Observable<ResidenceCardRequest>{
    return this.http.get<ResidenceCardRequest>(`${this.apiServerUrl}/ResidenceCardRequest/find/${residenceCardRequestId}`);
  }
  public getEmployees(): Observable<ResidenceCardRequest[]>{
    return this.http.get<ResidenceCardRequest[]>(`${this.apiServerUrl}/ResidenceCardRequest/employee`);
  }


  public addResidenceCardRequest(residenceCardRequest: ResidenceCardRequest): Observable<ResidenceCardRequest>{
    return this.http.post<ResidenceCardRequest>(`${this.apiServerUrl}/ResidenceCardRequest/add`, residenceCardRequest);
  }

  public updateResidenceCardRequest(residenceCardRequest: ResidenceCardRequest): Observable<ResidenceCardRequest>{
    return this.http.put<ResidenceCardRequest>(`${this.apiServerUrl}/ResidenceCardRequest/update`, residenceCardRequest);
  }

  public deleteResidenceCardRequest(residenceCardRequestId: number): Observable<ResidenceCardRequest>{
    return this.http.delete<ResidenceCardRequest>(`${this.apiServerUrl}/ResidenceCardRequest/delete/${residenceCardRequestId}`);
  }

  public approveResidenceCardRequest(residenceCardRequest: ResidenceCardRequest): Observable<ResidenceCardRequest>{
    return this.http.put<ResidenceCardRequest>(`${this.apiServerUrl}/ResidenceCardRequest/approveResidenceCardRequest`, residenceCardRequest);
  }


// public rejectResidenceCardRequest(residenceCardRequest: ResidenceCardRequest): Observable<ResidenceCardRequest>{
//   return this.http.put<ResidenceCardRequest>(`${this.apiServerUrl}/ResidenceCardRequest/reject`, residenceCardRequest)

// }
public rejectResidenceRequest(residenceCardRequest:ResidenceCardRequest)
{
  return this.http.put<ResidenceCardRequest>(`${this.apiServerUrl}/ResidenceCardRequest/reject`,residenceCardRequest)
}

public getById(residenceCardRequestId: number): Observable<ResidenceCardRequest>{
  return this.http.get<ResidenceCardRequest>(`${this.apiServerUrl}/ResidenceCardRequest/approve/${residenceCardRequestId}`);
}

  public get(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }
  public Approve(): Observable<ResidenceCardRequest[]>{
    return this.http.get<ResidenceCardRequest[]>(`${this.apiServerUrl}/ResidenceCardRequest/ALLApprove`);
  }
  public Rejrct(): Observable<ResidenceCardRequest[]>{
    return this.http.get<ResidenceCardRequest[]>(`${this.apiServerUrl}/ResidenceCardRequest/ALLRejrct`);
  }

}


