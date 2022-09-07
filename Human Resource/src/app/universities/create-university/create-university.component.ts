import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-create-university',
  templateUrl: './create-university.component.html',
  styleUrls: ['./create-university.component.scss']
})
export class CreateUniversityComponent implements OnInit {

   universities!: University[];
   universityData = {
    universityId: '',
    universityName: '',
    description: '',
    deleteFlag: 1,
  };

  form: FormGroup = new FormGroup({
    universityName: new FormControl(''),
  });

snackBar: any;
   constructor(private universityService: UniversityService,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

   ngOnInit() {


    this.form = this.fb.group(
      {
        universityName:['', [Validators.required,Validators.minLength(3)]],
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


   public onAddUniversity(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.universityService.addUniversity(this.universityData).subscribe(
        (data: University) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

          this.goUniversityList();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
          console.log(error);
        }
      );



   }

}
