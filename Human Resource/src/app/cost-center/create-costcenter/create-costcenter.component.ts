import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { CostCenter } from '../cost-center';
import { CostCenterService } from '../cost-center.service';

@Component({
  selector: 'app-create-costcenter',
  templateUrl: './create-costcenter.component.html',
  styleUrls: ['./create-costcenter.component.scss']
})
export class CreateCostcenterComponent implements OnInit {

  costCenter!: CostCenter[];
   costcenterData = {
    costCenterId: '',
    costCenterNumber: '',
    costCenterName: '',
    deleteFlag: 1,
  };

  form: FormGroup = new FormGroup({
    costCenterName: new FormControl(''),
    costCenterNumber: new FormControl(''),

  });


   constructor(private costService: CostCenterService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }
   ngOnInit() {
    this.countCostCenter();

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


   submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }

   public onAddCostCenter(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
     this.costService.addCostCenter(this.costcenterData).subscribe(
       (response: CostCenter) => {
         console.log(response);
         Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
         this.costService.getAllCostCenter();
         this.goCostCenterList();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
       }
     );
      }
      public countCostCenter(){
        this.costService.countCostCenter().subscribe((data)=>{
          this.costcenterData.costCenterNumber= (Number(data)+1).toString()

        })
      }


}
