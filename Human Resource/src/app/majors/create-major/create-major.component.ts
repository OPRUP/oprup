import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { QualificationService } from 'src/app/qualifications/qualification.service';
import Swal from 'sweetalert2';
import { Major } from '../major';
import { MajorService } from '../major.service';

@Component({
  selector: 'app-create-major',
  templateUrl: './create-major.component.html',
  styleUrls: ['./create-major.component.scss']
})
export class CreateMajorComponent implements OnInit {
  majors!: Major[];
  majorData = {
    majorId: '',
    majorName: '',
    description: '',
    deleteFlag: 1,
  };

  form: FormGroup = new FormGroup({
    majorName: new FormControl(''),
  });

snackBar: any;
  constructor(private majorService: MajorService,
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
        majorName:['', Validators.required],

      }

    );

  }

  goMajorList(){
    this.router.navigate(['/majors/majors'])
  }

  submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }



  public onAddMajor(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

      this.majorService.addMajor(this.majorData).subscribe(
        (response: Major) => {
          console.log(response);
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.majorService.getMajors();
          this.goMajorList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }


}
