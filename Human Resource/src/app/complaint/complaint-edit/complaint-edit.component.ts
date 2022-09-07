import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-complaint-edit',
  templateUrl: './complaint-edit.component.html',
  styleUrls: ['./complaint-edit.component.scss']
})
export class ComplaintEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    complaintDate: new FormControl(''),
    details:new FormControl(''),
    complaintProviderName: new FormControl(''),
    documents: new FormControl(''),
  });
  complaintId!: number;
  complaint;
  complaints!:Complaint[]

  constructor( private complaintService: ComplaintService,
    private router: Router,
    public fb: FormBuilder, // Form Builder service for Reactive forms
     private activateRoute: ActivatedRoute,
     private translate: TranslateService ) {
       this.translate.setDefaultLang('ar');
   const lang = localStorage.getItem('lang')  || 'ar';
   this.translate.use(lang);
   document.documentElement.lang = lang;
      }

  ngOnInit() {
    this.getComplaint();
    this.form = this.fb.group(
      {
        complaintDate:['', Validators.required],
        details:['',Validators.required],
        complaintProviderName: ['',Validators.required],
        documents: ['',Validators.required],


      });
  }
  goComplaintsList(){
    this.router.navigate(['/international/complaint/complaint'])
    }
    public getComplaint(){
      this.complaintId = this.activateRoute.snapshot.params['id'];
      this.complaintService.getComplaintById(this.complaintId)
      .subscribe(data => {

        this.complaint = data;
      }, error => console.log(error));
    }
    submitted = false;
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }

    public onUpdateComplaint(Com) {

      this.submitted = true;
      if (this.form.invalid) {
        return;
      }

        this.complaintService.updateComplaint(this.complaint).subscribe(
          (data) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

          
            // this.getProject();
            this.goComplaintsList();
          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
            console.log(error);
          }
        );
      }

}
