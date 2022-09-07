import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Taskeen } from '../Taskeen';
import { TaskeenService } from '../Taskeen.service';

@Component({
  selector: 'app-Taskeen_Print',
  templateUrl: './Taskeen_Print.component.html',
  styleUrls: ['./Taskeen_Print.component.scss']
})
export class Taskeen_PrintComponent implements OnInit {
  displayedColumns: string[] = [
    'habitationCode',
    'habitationName',
    'rentContractStartingDate',
    'rentContractEndingDate',
    'rentCostPerMonth',
    'capacity',
  ]
  employees?:Employee[];
  taskeens!: MatTableDataSource<Taskeen>;

  constructor(private taskeenService:TaskeenService,private employeeService: EmployeeService,private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;

  }

  ngOnInit() {
    this.getAllTaskeens();
  }
  public getAllTaskeens(): void {
    this.taskeenService.getAllTaskeen().subscribe(
      (response:Taskeen[]) => {
        this.taskeens = new MatTableDataSource(response);

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
