import { Component, OnInit } from '@angular/core';
import { SimpleDataTable } from 'src/app/shared/data/tables_data/data_table';
import { DataTable } from 'simple-datatables';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  dataTable = SimpleDataTable;
  viewMode;
  //constructor() { }
  constructor(private employeeService: EmployeeService, private router: Router, private activateRoute: ActivatedRoute, public translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
  }


    ngOnInit() {
    this.viewMode = "tab01";
  
  }

  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true,
    });

  }

}
