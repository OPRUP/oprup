import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Employee09_ContractService } from 'src/app/employees/Employee09_Contract.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-slips',
  templateUrl: './slips.component.html',
  styleUrls: ['./slips.component.scss']
})
export class SlipsComponent implements OnInit {
  employeeId;
  employees;
  contracts;
  paginator: any;
  matSort: any;

  displayedColumns: string[] = [

    'employeeName',

    'actions',
  ];

  constructor(private employeeService: EmployeeService,
              private translate: TranslateService,
              private employeeContract: Employee09_ContractService,
              private router: Router,
              private activateRoute: ActivatedRoute


              ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getEmployees();
    this.getContracts();

  }

  public getEmployees(){
    this.employeeService.get().subscribe(
      (response:Employee[]) => {
      this.employees = new MatTableDataSource(response);
      this.employees.paginator =this.paginator;
      this.employees.sort = this.matSort;

      },
      (error)  =>
      {
        console.log(error);
        Swal.fire(this.translate.instant('Error'), this.translate.instant('Errorinloadingdata'), 'error')

      }
      );
  }

  public getContracts(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.employeeContract.get().subscribe(
      (response:any) => {

        this.contracts = response;

      },
    )
  }



  public editCreateSlip(employeeId,contractId){
    this.router.navigate(['slips/create-slip',employeeId,contractId]);
   }
   public editAllSlips(slipId,contractId){
    this.router.navigate(['slips/list-slips',slipId,contractId]);
   }


  filterData($event: any){
    this.employees.filter = $event.target.value;
  }


}
