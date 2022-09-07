import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Major } from '../major';
import { MajorService } from '../major.service';

@Component({
  selector: 'app-edit-major',
  templateUrl: './edit-major.component.html',
  styleUrls: ['./edit-major.component.scss']
})
export class EditMajorComponent implements OnInit {

  //public qualification: Qualification[] = [];
  majorId!: number;
  major!: Major;
  majors!: Major[];
  form: FormGroup = new FormGroup({
    majorName: new FormControl(''),
  });


  constructor(private majorService: MajorService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getMajor();

    this.form = this.fb.group(
      {
        majorName:['', Validators.required],

      }

    );


  }

  goMajorList(){
    this.router.navigate(['/majors/majors'])
  }

  public getMajor(){
    this.majorId = this.activateRoute.snapshot.params['id'];
    this.majorService.getMajorById(this.majorId)
    .subscribe(data => {
      console.log(data)
      this.major = data;
    }, error => console.log(error));
  }

  public getAllMajors(): void {
    this.majorService.getMajors().subscribe(
      (response: Major[]) => {
        this.majors = response;
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

  public onUpdateMajor(major: Major): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
   this.majorService.updateMajor(this.major).subscribe(
        (response: Major) => {
          console.log(response);
          Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
          this.getAllMajors();
          this.goMajorList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
        }
      );
    }



}
