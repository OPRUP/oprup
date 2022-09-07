import { UniversityService } from './../university.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { University } from '../university';

@Component({
  selector: 'app-print-universities',
  templateUrl: './print-universities.component.html',
  styleUrls: ['./print-universities.component.scss']
})
export class PrintUniversitiesComponent implements OnInit {
  University;
  displayedColumns: string[] = [
    'universityId',
    'universityName',
    'description',
  ]
  constructor(private service:UniversityService) { }

  ngOnInit(): void {
    this.getAllMajors();
  }
  public getAllMajors(): void {

    this.service.getUniversities().subscribe((response:University[]) => {
      this.University = new MatTableDataSource(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }
  printPage() {

    window.print();
  }

}
