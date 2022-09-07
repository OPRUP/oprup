import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


import { JournalVoucher } from './jour-voucher';
import { JournalVoucherDetails } from './jour-voucher-details';

@Injectable({
  providedIn: 'root'
})
export class JournalVoucherService {
  private apiServerUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) { }
public getAllJournalVoucher(): Observable<JournalVoucher[]>{
  return this.http.get<JournalVoucher[]>(`${this.apiServerUrl}/journalVoucher/all`);
}

public getJournalVoucherById(journalVoucherId: number): Observable<JournalVoucher>{
  return this.http.get<JournalVoucher>(`${this.apiServerUrl}/journalVoucher/find/${journalVoucherId}`);
}
public getJournalVoucherDetalisByjournalVoucherId(journalVoucherId): Observable<any>{
  return this.http.get<any>(`${this.apiServerUrl}/journalVoucherDetails/find/${journalVoucherId}`);
}


public addJournalVoucher(journalVoucher): Observable<any>{
  return this.http.post<any>(`${this.apiServerUrl}/journalVoucher/add`, journalVoucher);
}
public addJournalVoucherDetalis(journalVoucherDetalis): Observable<any>{
  return this.http.post<any>(`${this.apiServerUrl}/journalVoucherDetails/add`, journalVoucherDetalis);
}

public updateJournalVoucher(journalVoucher:JournalVoucher): Observable<JournalVoucher>{
  return this.http.put<JournalVoucher>(`${this.apiServerUrl}/journalVoucher/update`, journalVoucher);
}

public deleteJournalVoucher(journalVoucherId:number ): Observable<JournalVoucher>{
  return this.http.put<JournalVoucher>(`${this.apiServerUrl}/journalVoucher/delete`, journalVoucherId);
}
public deleteJournalVoucherDetalis(journalVoucherDetailsId: number): Observable<JournalVoucherDetails>{
  return this.http.put<JournalVoucherDetails>(`${this.apiServerUrl}/journalVoucherDetails/delete`, journalVoucherDetailsId);
}
public count():any{
  return this.http.get(`${this.apiServerUrl}/journalVoucher/count`)
}

}
