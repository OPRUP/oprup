import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TopManagement } from '../top-management';
import { TopManagementsService } from '../top-managements.service';

@Component({
  selector: 'app-create-top-management',
  templateUrl: './create-top-management.component.html',
  styleUrls: ['./create-top-management.component.scss']
})
export class CreateTopManagementComponent implements OnInit {
  form: FormGroup = new FormGroup({
    companyName: new FormControl(''),
    dateStart:new FormControl(''),
    dateEnding: new FormControl(''),
    commercialId: new FormControl(''),
    licenseId:new FormControl(''),
    // licenseExpiryDate:new FormControl(''),
    // employeeId: new FormControl(''),


  });
     topManagement!: TopManagement[];
     topManagementData = {
      topManagementId: '',
      companyName: '',
      commercialId: '',
      dateStart: '',
      dateEnding: '',
      licenseId: '',
      deleteFlag: 1,
    };
  snackBar: any;
  constructor(private topManagementsService: TopManagementsService,
    private router: Router,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(){
    this.form = this.fb.group(
      {
        companyName:['', Validators.required],
        dateStart:['',Validators.required],
        dateEnding: ['',Validators.required],
        commercialId: ['',Validators.required],
        licenseId: ['',Validators.required],


      });
  }

  goTopManagementList(){
    this.router.navigate(['/top-managements/top-managements'])
  }
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onAddTopManagement(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
      if(new Date(this.topManagementData.dateEnding)<=new Date(this.topManagementData.dateStart))
     {

      Swal.fire(this.translate.instant('warning'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'warning')
return;
    }
      document.getElementById('add-top-management-form')?.click();
      this.topManagementsService.add(this.topManagementData).subscribe(
        (data: TopManagement) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

          this.goTopManagementList();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
          console.log(error);
        }
      );
    }

  }

