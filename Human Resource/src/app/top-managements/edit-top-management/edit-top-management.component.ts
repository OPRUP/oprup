import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TopManagement } from '../top-management';
import { TopManagementsService } from '../top-managements.service';

@Component({
  selector: 'app-edit-top-management',
  templateUrl: './edit-top-management.component.html',
  styleUrls: ['./edit-top-management.component.scss']
})
export class EditTopManagementComponent implements OnInit {
  form: FormGroup = new FormGroup({
    companyName: new FormControl(''),
    dateStart:new FormControl(''),
    dateEnding: new FormControl(''),
    commercialId: new FormControl(''),
    licenseId:new FormControl(''),
    
  });
 topManagementId!: number;
 topManagement!: TopManagement;
 topManagements!: TopManagement[];

 constructor(private topManagementsService: TopManagementsService,
  public fb: FormBuilder, // Form Builder service for Reactive forms
  private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

 ngOnInit() {
   this.getTopManagement();
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

 public getTopManagement(){
   this.topManagementId = this.activateRoute.snapshot.params['id'];
   this.topManagementsService.getById(this.topManagementId)
   .subscribe(data => {

     this.topManagement = data;
   }, error => console.log(error));
 }

 public getAllTopManagements(): void {
   this.topManagementsService.get().subscribe(
     (response: TopManagement[]) => {
       this.topManagements = response;
     },
     (error: HttpErrorResponse) => {

     }
   );
 }

 public onUpdateTopManagement(): void {
  this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.topManagementsService.update(this.topManagement).subscribe(
      (response: TopManagement) => {

Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

        this.getAllTopManagements();
        this.goTopManagementList();
      },
      (error: HttpErrorResponse) => {

        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
      }
    );
  }

 }


