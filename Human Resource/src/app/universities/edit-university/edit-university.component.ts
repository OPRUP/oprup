import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-edit-university',
  templateUrl: './edit-university.component.html',
  styleUrls: ['./edit-university.component.scss']
})
export class EditUniversityComponent implements OnInit {

 //public qualification: Qualification[] = [];
 universityId!: number;
 university!: University;
 universities!: University[];

 form: FormGroup = new FormGroup({
  universityName: new FormControl(''),
});


 constructor(private universityService: UniversityService,
  public fb: FormBuilder, // Form Builder service for Reactive forms
  private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang;
 }

 ngOnInit() {
   this.getUniversity();
   this.form = this.fb.group(
    {
      universityName:['', Validators.required],
    }

  );

 }

 goUniversityList(){
   this.router.navigate(['/universities/universities'])
 }

 submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }

 public getUniversity(){
   this.universityId = this.activateRoute.snapshot.params['id'];
   this.universityService.getUniversityById(this.universityId)
   .subscribe(data => {
     this.university = data;
   }, error => console.log(error));
 }

 public getAllUniversities(): void {
   this.universityService.getUniversities().subscribe(
     (response: University[]) => {
       this.universities = response;
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
   );
 }

 public onUpdateUniversity(university: University): void {

  this.submitted = true;
  if (this.form.invalid) {
    return;
  }

    this.universityService.updateUniversity(this.university).subscribe(
      (response: University) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
      
        this.getAllUniversities();
        this.goUniversityList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);

    Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
      }
    );
  }




}
