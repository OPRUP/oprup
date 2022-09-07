import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.scss']
})
export class InsuranceDetailsComponent implements OnInit {
  employeeId;
  insuranceData;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor( private insuranceService: InsuranceService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.getEmployeeProjectById();
  }

  public getEmployeeProjectById(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.insuranceService.getById(this.employeeId)
    .subscribe( (response:any) => {
      this.insuranceData = response;
      this.insuranceData.paginator =this.paginator;
      this.insuranceData.sort = this.matSort;
     
    }, error => console.log(error));
  }
}
