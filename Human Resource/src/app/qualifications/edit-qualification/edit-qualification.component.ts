import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Qualification } from '../qualification';
import { QualificationService } from '../qualification.service';

@Component({
  selector: 'app-edit-qualification',
  templateUrl: './edit-qualification.component.html',
  styleUrls: ['./edit-qualification.component.scss']
})
export class EditQualificationComponent implements OnInit {

  //public qualification: Qualification[] = [];
  qualificationId!: number;
  qualification;
  qualifications;

  form: FormGroup = new FormGroup({
    qualificationName: new FormControl(''),
  });

  constructor(private qualificationService: QualificationService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getQualification();

    this.form = this.fb.group(
      {
        qualificationName:['', Validators.required],

      }

    );

  }

  goQualificationList(){
    this.router.navigate(['/qualifications/qualifications'])
  }

  public getQualification(){
    this.qualificationId = this.activateRoute.snapshot.params['id'];
    this.qualificationService.getQualificationById(this.qualificationId)
    .subscribe(data => {

      this.qualification = data;
    }, error => console.log(error));
  }

  public getAllQualifications(): void {
    this.qualificationService.getQualifications().subscribe(
      (response: Qualification[]) => {
        this.qualifications = response;
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

  public onUpdateQualification(qualification: Qualification): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }


    this.qualificationService.updateQualification(this.qualification).subscribe(
      (response: Qualification) => {

        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
        this.getAllQualifications();
        this.goQualificationList();
      },
      (error: HttpErrorResponse) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
        alert(error.message);
      }
    );
  }


}
