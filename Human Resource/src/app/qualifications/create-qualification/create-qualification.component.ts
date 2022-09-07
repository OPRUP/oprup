import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Qualification } from '../qualification';
import { QualificationService } from '../qualification.service';

@Component({
  selector: 'app-create-qualification',
  templateUrl: './create-qualification.component.html',
  styleUrls: ['./create-qualification.component.scss']
})
export class CreateQualificationComponent implements OnInit {

  qualifications!: Qualification[];
  qualifData = {
    qualificationId: '',
    qualificationName: '',
    description: '',
    deleteFlag: 1,
  };

  //qualifications!: Qualification[];

  form: FormGroup = new FormGroup({
    qualificationName: new FormControl(''),
    description: new FormControl(''),
  });


  constructor(private qualificationService: QualificationService,

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
        qualificationName:['', Validators.required],


      }

    );

  }

  goQualificationList(){
    this.router.navigate(['/qualifications/qualifications'])
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onAddQualification(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.qualificationService.addQualification(this.qualifData).subscribe(
      (response: Qualification) => {
  
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
        this.qualificationService.getQualifications();
        this.goQualificationList();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
      }
    );
  }

}
