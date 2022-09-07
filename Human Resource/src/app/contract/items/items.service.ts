import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Items} from './items'
@Injectable({
  providedIn: 'root'
})
export class ItemsserviceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllItems(): Observable<Items[]>{
    return this.http.get<Items[]>(`${this.apiServerUrl}/item/all`);
  }

  public getItemsById(itemsId: number): Observable<Items>{
    return this.http.get<Items>(`${this.apiServerUrl}/item/find/${itemsId}`);
  }
  public getItemsByCode(itemsCode: string): Observable<Items>{
    return this.http.get<Items>(`${this.apiServerUrl}/item/findCode/${itemsCode}`);
  }

  public addItems(items: Items): Observable<Items>{
    return this.http.post<Items>(`${this.apiServerUrl}/item/add`, items);
  }

  public updateItems(items: Items): Observable<Items>{
    return this.http.put<Items>(`${this.apiServerUrl}/item/update`, items);
  }

  public deleteVendor(items: Items): Observable<Items>{
    return this.http.put<Items>(`${this.apiServerUrl}/item/delete`, items);
  }

}