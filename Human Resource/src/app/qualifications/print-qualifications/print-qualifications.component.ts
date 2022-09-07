import { QualificationService } from './../qualification.service';
import { Component, OnInit } from '@angular/core';
import { Qualification } from '../qualification';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-print-qualifications',
  templateUrl: './print-qualifications.component.html',
  styleUrls: ['./print-qualifications.component.scss']
})
export class PrintQualificationsComponent implements OnInit {
  qualifications;
  displayedColumns: string[] = [

    'qualificationId',
    'qualificationName',
    'description',
  ]

  paginator: any;
  matSort: any;

  constructor(private service: QualificationService) { }

  ngOnInit(): void {
    this.getAllQualifications();
  }
public getAllQualifications(): void {
    this.service.getQualifications().subscribe(
      (response:Qualification[]) => {
      this.qualifications = new MatTableDataSource(response);
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );

  }

  printPage() {

    window.print();
  }
}
