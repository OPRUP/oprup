import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectEmdadat } from './project-emdadat';

@Injectable({
  providedIn: 'root'
})
export class ProjectEmdadateService {
  private apiServerUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) { }

public getAllProject(): Observable<ProjectEmdadat[]>{
  return this.http.get<ProjectEmdadat[]>(`${this.apiServerUrl}/project/all`);
}

public getProjectById(projectId: number): Observable<ProjectEmdadat>{
  return this.http.get<ProjectEmdadat>(`${this.apiServerUrl}/project/find/${projectId}`);
}


public addProject(project: ProjectEmdadat): Observable<ProjectEmdadat>{
  return this.http.post<ProjectEmdadat>(`${this.apiServerUrl}/project/add`, project);
}

public updateProject(projectid: number): Observable<ProjectEmdadat>{
  return this.http.put<ProjectEmdadat>(`${this.apiServerUrl}/project/update`, projectid);
}

public deleteProject(projectId:number ): Observable<ProjectEmdadat>{
  return this.http.put<ProjectEmdadat>(`${this.apiServerUrl}/project/delete`, projectId);
}

public countProject(): any{
  return this.http.get(`${this.apiServerUrl}/project/count` );
}

}
