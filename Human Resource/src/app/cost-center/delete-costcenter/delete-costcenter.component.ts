import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { CostCenter } from '../cost-center';
import { CostCenterService } from '../cost-center.service';

@Component({
  selector: 'app-delete-costcenter',
  templateUrl: './delete-costcenter.component.html',
  styleUrls: ['./delete-costcenter.component.scss']
})
export class DeleteCostcenterComponent implements OnInit {
  costCenterId!: number;
  costcenter;
  costcenters!: CostCenter[];
  constructor(private costService: CostCenterService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }
  ngOnInit() {
    this.getCostCenter();
  }

  public getCostCenter(){
    this.costCenterId = this.activateRoute.snapshot.params['id'];
    this.costService.getCostCenterById(this.costCenterId)
    .subscribe(data => {
      console.log(data)
      this.costcenter = data;
    }, error => console.log(error));
  }
  public onDeleteCostCenter(costcenter): void {

    this.costService.deleteCostCenter(this.costcenter).subscribe(
    (response) => {
    console.log(response);
    Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
    this.goCostCenterList();
    },
    (error: HttpErrorResponse) => {
    alert(error.message);
    Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
    }

  // public onDeleteCostCenter(costcenter: CostCenter){
  //   this.costService.deleteCostCenter(costcenter).subscribe( data => {
  //     console.log(data);
  //     Swal.fire('Success', 'CostCenter is Deleted', 'success')
  //     this.goCostCenterList();
  //   },
  //   (error: HttpErrorResponse) =>{
  //     alert(error.message);
  //     Swal.fire('Error!! ', 'Error while delete CostCenter', 'error')
  //   }
  //   );
  // }

  public getAllCostCenter(): void {
    this.costService.getAllCostCenter().subscribe(
      (response: CostCenter[]) => {
        this.costcenters = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goCostCenterList(){
    this.router.navigate(['/finance/cost-center/cost-center'])
  }



}
