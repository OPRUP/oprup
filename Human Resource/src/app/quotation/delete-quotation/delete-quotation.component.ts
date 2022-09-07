import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Customer } from 'src/app/customer/Customer';
import { Employee } from 'src/app/employees/employee';
import Swal from 'sweetalert2';
import { Quotation } from '../quotation';
import { QuotationService } from '../quotation.service';

@Component({
  selector: 'app-delete-quotation',
  templateUrl: './delete-quotation.component.html',
  styleUrls: ['./delete-quotation.component.scss']
})
export class DeleteQuotationComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  quotationId!: number;
  quotation!: Quotation;
  quotations!: Quotation[];




  constructor(private quotationService: QuotationService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getQuotation();
  }

  public getQuotation(){
    this.quotationId = this.activateRoute.snapshot.params['id'];
    this.quotationService.getQuotationById(this.quotationId)
    .subscribe(data => {
      console.log(data)
      this.quotation = data;
    }, error => console.log(error));
  }


  public onDeleteQuotation(quotationId){

    this.quotationService.deleteQuotation(this.quotation).subscribe( data => {

      Swal.fire('Success', 'Quotation is Deleted', 'success')
      this.goQuotationList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire('Error!! ', 'Error while delete Quotation', 'error')
    }
    );
  }

  public getAllQuotation(): void {
    this.quotationService.getQuotation().subscribe(
      (response: Quotation[]) => {
        this.quotations = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goQuotationList(){
    this.router.navigate(['/sales/view-quotation/view-quotation'])
  }


}
