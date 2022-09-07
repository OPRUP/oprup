import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Transportation } from '../Transportation';
import { TransportationService } from '../Transportation.service';

@Component({
  selector: 'app-Transportation_print',
  templateUrl: './Transportation_print.component.html',
  styleUrls: ['./Transportation_print.component.scss']
})
export class Transportation_printComponent implements OnInit {
  displayedColumns: string[] = [
    'transportationMeanCode',
    'transportationMeanType',
    'transportationMeanNumber',
    'transportationMeanBuyingDate',
    // 'licensePhoto',
    // 'capacity',
  ]
  employees?:Employee[];
  transportations!: MatTableDataSource<Transportation>;

  constructor(private transportationService:TransportationService,private employeeService: EmployeeService,private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;

  }

  ngOnInit() {
    this.getAllTransportations();
  }
  public getAllTransportations(): void {
    this.transportationService.getAllTransportation().subscribe(
      (response:Transportation[]) => {
        this.transportations = new MatTableDataSource(response);

      /* this.projects.paginator =this.paginator;
      this.projects.sort = this.matSort; */
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
