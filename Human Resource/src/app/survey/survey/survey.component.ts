import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Customer } from 'src/app/customer/Customer';
import Swal from 'sweetalert2';
import { survey } from '../survey';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  surveys!: survey[];
  surveyData = {
    surveyId:'',
    question1:'',
    question2:'',
    question3:'',
    question4:'',
    question5:'',
    question6:'',
    question7:'',
    question8:'',
   deleteFlag: 1,
 };
//  form: FormGroup = new FormGroup({
//   question1: new FormControl(''),
//   question2: new FormControl(''),
//   question3: new FormControl(''),
//   question4: new FormControl(''),
//   question5: new FormControl(''),
//   question6: new FormControl(''),
//   question7: new FormControl(''),
//   question8: new FormControl(''),

// });

 constructor(private surveyService:SurveyService ,
  private router: Router,
  public fb: FormBuilder, // Form Builder service for Reactive forms

  private translate: TranslateService){

 this.translate.setDefaultLang('ar');
 const lang = localStorage.getItem('lang')  || 'ar';
 this.translate.use(lang);
 document.documentElement.lang = lang;
}
  ngOnInit(): void {


  //   this.form = this.fb.group(
  //     {

  // question1: ['',[Validators.required]],
  // question2: ['',[Validators.required]],
  // question3: ['',[Validators.required]],
  // question4: ['',[Validators.required]],
  // question5: ['',[Validators.required]],
  // question6:['',[Validators.required]],
  // question7: ['',[Validators.required]],
  // question8: ['',[Validators.required]],

  //     }

  //   );

  }

  // submitted = false;
  // get f(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }


  public onAddSurvey(): void {
  //  this.submitted = true;
  //  if (this.form.invalid) {
  //    return;
  //  }
    this.surveyService.addSurvey(this.surveyData).subscribe(
      (response) => {
        console.log(response);
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
        this.surveyData = {
          surveyId:'',
          question1:'',
          question2:'',
          question3:'',
          question4:'',
          question5:'',
          question6:'',
          question7:'',
          question8:'',
         deleteFlag: 1,
       };

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
      }
    );
     }




}
