import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Employee_HabitationAndTransport } from "./employee";



@Injectable({
    providedIn: 'root'
  })


  export class EmployeeResidenceAndTransportationService{
    private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public get(): Observable<Employee_HabitationAndTransport[]>{
    return this.http.get<Employee_HabitationAndTransport[]>(`${this.apiServerUrl}/employeeResTrans/all`);
  }

  public getById(id: number): Observable<Employee_HabitationAndTransport>{
    return this.http.get<Employee_HabitationAndTransport>(`${this.apiServerUrl}/employeeResTrans/employee/${id}`);
  }
  public getResTransById(id: number): Observable<Employee_HabitationAndTransport>{
    return this.http.get<Employee_HabitationAndTransport>(`${this.apiServerUrl}/employeeResTrans/find/${id}`);
  }

  public add(record: Employee_HabitationAndTransport): Observable<Employee_HabitationAndTransport>{
    return this.http.post<Employee_HabitationAndTransport>(`${this.apiServerUrl}/employeeResTrans/add`, record);
  }

  public update(record: Employee_HabitationAndTransport): Observable<Employee_HabitationAndTransport>{
    return this.http.put<Employee_HabitationAndTransport>(`${this.apiServerUrl}/employeeResTrans/update`, record);
  }

  public delete(id:number): Observable<Employee_HabitationAndTransport>{
    return this.http.put<Employee_HabitationAndTransport>(`${this.apiServerUrl}/employeeResTrans/delete`, id);
  }



  }
