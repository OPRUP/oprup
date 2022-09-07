import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-complaint-create',
  templateUrl: './complaint-create.component.html',
  styleUrls: ['./complaint-create.component.scss']
})
export class ComplaintCreateComponent implements OnInit {
  complaint;

  form: FormGroup = new FormGroup({
    complaintDate: new FormControl(''),
    details:new FormControl(''),
    complaintProviderName: new FormControl(''),
    documents: new FormControl(''),
  });



  complaintEmdadat = {
    complaintId:'',
    complaintDate: '',
    details: '',
    complaintProviderName: '',
    documents: '',
    deleteFlag: 1,
  }
  compliants!: Complaint[];
  constructor(private complaintService: ComplaintService,
    private router: Router,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private activateRoute: ActivatedRoute,
     private translate: TranslateService
    ) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
     }

  ngOnInit() {
    this.form = this.fb.group(
      {
        complaintDate:['', Validators.required],
        complaintProviderName:['',Validators.required],
        details: ['',Validators.required],
        documents: ['',Validators.required],
      });

  }
  goComplaintsList(){
    this.router.navigate(['international/complaint/complaint'])
    }

    submitted = false;
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public onAddComplaint(): void {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }
      document.getElementById('add-Complaint-form')?.click();
      this.complaintService.addComplaint(this.complaintEmdadat).subscribe(

        (response: Complaint) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.getAllComplaints();
          this.goComplaintsList();
        },
      (error: HttpErrorResponse) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

        console.log(error);
      }
      );

      }
      public getAllComplaints(): void{
        this.complaintService.getAllComplaint().subscribe(
          (response:Complaint[]) => {
          this.compliants = response;
      
        },
        (error: HttpErrorResponse) => {
              alert(error.message);
            }
        )
      }

}
