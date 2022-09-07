import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Complaint } from './complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private apiServerUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) { }
public getAllComplaint(): Observable<Complaint[]>{
  return this.http.get<Complaint[]>(`${this.apiServerUrl}/complaint/all`);
}

public getComplaintById(complaintId: number): Observable<Complaint>{
  return this.http.get<Complaint>(`${this.apiServerUrl}/complaint/find/${complaintId}`);
}


public addComplaint(complaint: Complaint): Observable<Complaint>{
  return this.http.post<Complaint>(`${this.apiServerUrl}/complaint/add`, complaint);
}

public updateComplaint(complaintId: number): Observable<Complaint>{
  return this.http.put<Complaint>(`${this.apiServerUrl}/complaint/update`, complaintId);
}

public deleteComplaint(complaintId:number ): Observable<Complaint>{
  return this.http.put<Complaint>(`${this.apiServerUrl}/complaint/delete`, complaintId);
}

}
