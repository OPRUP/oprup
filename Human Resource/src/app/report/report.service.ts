import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor() { }
}
