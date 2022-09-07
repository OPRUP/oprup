import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { KitchenTaskeen } from './KitchenTaskeen';

@Injectable({
  providedIn: 'root'
})
export class KitchenTaskeenService {
  private apiServerUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) { }
public getAllKitchenRoom(): Observable<KitchenTaskeen[]>{
  return this.http.get<KitchenTaskeen[]>(`${this.apiServerUrl}/kitchenRoom/all`);
}

public getKitchenRoomById(kitchenId: number): Observable<KitchenTaskeen>{
  return this.http.get<KitchenTaskeen>(`${this.apiServerUrl}/kitchenRoom/find/${kitchenId}`);
}


public addKitchenRoom(kitchenRoom: KitchenTaskeen): Observable<KitchenTaskeen>{
  return this.http.post<KitchenTaskeen>(`${this.apiServerUrl}/kitchenRoom/add`, kitchenRoom);
}

public updateKitchenRoom(kitchenId: number): Observable<KitchenTaskeen>{
  return this.http.put<KitchenTaskeen>(`${this.apiServerUrl}/kitchenRoom/update`, kitchenId);
}

public deleteKitchenRoom(kitchenId:number ): Observable<KitchenTaskeen>{
  return this.http.put<KitchenTaskeen>(`${this.apiServerUrl}/kitchenRoom/delete`, kitchenId);
}

}
