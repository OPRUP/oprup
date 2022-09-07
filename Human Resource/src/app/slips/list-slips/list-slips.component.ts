import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Employee09_ContractService } from 'src/app/employees/Employee09_Contract.service';
import Swal from 'sweetalert2';
import { Slip } from '../slip';
import { SlipService } from '../slip.service';

@Component({
  selector: 'app-list-slips',
  templateUrl: './list-slips.component.html',
  styleUrls: ['./list-slips.component.scss']
})
export class ListSlipsComponent implements OnInit {


  employeeId;
  contractId;
  contract;
  employee;
  slips;
  paginator: any;
  matSort: any;

  displayedColumns: string[] = [
    'year',
    'month',
    'netSalary',
    'status',
    'actions',
  ];

  constructor(
    private route: Router,
    private activateRoute: ActivatedRoute,
    private slipService: SlipService,
    private contractService: Employee09_ContractService,
    private translate: TranslateService

    ) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.contractId = this.activateRoute.snapshot.params['id'];
    //this.getSlipOfEmployee();
    this.getSlipOfContract();
     this.getContract();
  }

  // public getSlipOfEmployee(){

  //   this.employeeId = this.activateRoute.snapshot.params['id'];
  //   this.slipService.getSlipsOfEmployee(this.employeeId).subscribe(
  //     (data: any) =>{
  //       this.slips = new MatTableDataSource(data);
  //       this.slips.paginator =this.paginator;
  //       this.slips.sort = this.matSort;
  //       console.log(this.slips);
  //     },
  //     (error)  =>
  //     {
  //       console.log(error);
  //       Swal.fire('Error !', 'Error in loading data !', 'error');

  //     }
  //   )
  // }

  public getSlipOfContract(){

    this.contractId = this.activateRoute.snapshot.params['id'];
    this.slipService.getSlipsOfContract(this.contractId).subscribe(
      (data: any) =>{
        this.slips = new MatTableDataSource(data);
        this.slips.paginator =this.paginator;
        this.slips.sort = this.matSort;

      },
      (error)  =>
      {
        console.log(error);

        Swal.fire(this.translate.instant('Error'), this.translate.instant('Errorinloadingdata'), 'error')

      }
    )
  }

  public getContract(){
    this.contractId = this.activateRoute.snapshot.params['id'];
    this.contractService.getById(this.contractId).subscribe(
      (response:any) =>{
        this.contract = response;
    
      },
    )
  }

  // public getEmployee(){
  //   this.employeeId = this.activateRoute.snapshot.params['id'];
  //   this.employeeService.getById(this.employeeId).subscribe(
  //     (response:any) =>{
  //       this.employee = response;
  //       console.log(this.employee);
  //     },
  //   )
  // }

  filterData($event: any){
    this.slips.filter = $event.target.value;
  }

}
