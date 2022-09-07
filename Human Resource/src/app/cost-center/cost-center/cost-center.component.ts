import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CostCenter } from '../cost-center';
import { CostCenterService } from '../cost-center.service';

@Component({
  selector: 'app-cost-center',
  templateUrl: './cost-center.component.html',
  styleUrls: ['./cost-center.component.scss']
})
export class CostCenterComponent implements OnInit {
  displayedColumns: string[] = [
'costCenterNumber',
    'costCenterName',
    'actions',
  ];
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  costcenters!: MatTableDataSource<CostCenter>;

  constructor(private costCenter: CostCenterService, private router: Router , private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getAllCostCenter();
  }
  public getAllCostCenter(): void {

    this.costCenter.getAllCostCenter().subscribe((response:CostCenter[]) => {
      this.costcenters = new MatTableDataSource(response);
      this.costcenters.paginator =this.paginator;
      this.costcenters.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
    }
    ngAfterViewInit() {}



    public onEditCostCenterById(costCenterId: number): void {
      this.router.navigate(['/finance/cost-center/edit-costcenter', costCenterId])
    }


    public onEditToDeleteCostCenterById(costCenterId: number):void{
      this.router.navigate(['/finance/cost-center/delete-costcenter', costCenterId])
    }

    filterData($event: any){
      this.costcenters.filter = $event.target.value;
    }

}
