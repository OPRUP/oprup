import { MajorService } from './../major.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Major } from '../major';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-print-majors',
  templateUrl: './print-majors.component.html',
  styleUrls: ['./print-majors.component.scss']
})
export class PrintMajorsComponent implements OnInit {
  majors;
  displayedColumns: string[] = [
    'majorId',
    'majorName',
    'description',
  ]


  constructor(private service: MajorService) { }

  ngOnInit(): void {

this.getAllMajors();
  }
  public getAllMajors(): void {

    this.service.getMajors().subscribe((response:Major[]) => {
      this.majors = new MatTableDataSource(response);
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
