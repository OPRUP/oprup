import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { CostCenter } from '../cost-center';
import { CostCenterService } from '../cost-center.service';

@Component({
  selector: 'app-edit-costcenter',
  templateUrl: './edit-costcenter.component.html',
  styleUrls: ['./edit-costcenter.component.scss']
})
export class EditCostcenterComponent implements OnInit {
  costCenterId!: number;
  costcenter;
  costcenters!: CostCenter[];
  form: FormGroup = new FormGroup({
    costCenterName: new FormControl(''),
    costCenterNumber: new FormControl(''),

  });

  constructor(private costService: CostCenterService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.countCostCenter();
    this.getCostCenter();
    this.form = this.fb.group(
      {
        costCenterName:['', [Validators.required,Validators.minLength(3)]],
        costCenterNumber:['', [Validators.required]],
      }

    );
  }

  goCostCenterList(){
    this.router.navigate(['/finance/cost-center/cost-center'])
  }

  public getCostCenter(){
    this.costCenterId = this.activateRoute.snapshot.params['id'];
    this.costService.getCostCenterById(this.costCenterId)
    .subscribe(data => {
      console.log(data)
      this.costcenter = data;
    }, error => console.log(error));
  }

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
  submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }
   public onUpdateCostCenter(cost) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

      this.costService.updateCostCenter(this.costcenter).subscribe(
        (data) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
          console.log(data)
          // this.getProject();
          this.goCostCenterList();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
          console.log(error);
        }
      );
    }
  // public onUpdateCostCenter(costCenterId): void {
  //   this.submitted = true;
  //   if (this.form.invalid) {
  //     return;
  //   }
  //   this.costService.updateCostCenter(this.costCenterId).subscribe(
  //     (response: CostCenter) => {
  //       console.log(response);
  //       Swal.fire('Success', 'CostCenter Information is Updated', 'success')
  //       this.getAllCostCenter();
  //       this.goCostCenterList();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       Swal.fire('Error!! ', 'Error while update CostCenter', 'error')
  //     }
  //   );

  // }
  public countCostCenter(){
    this.costService.countCostCenter().subscribe((data)=>{
      this.costcenter.costCenterNumber=`L000500${data+1}`

    })
  }


}
