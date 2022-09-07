import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

  customerId!: number;
  customer;
  customers!:Customer[];


  constructor(private customerService:CustomerService ,
    private router: Router ,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService){
   this.translate.setDefaultLang('ar');
   const lang = localStorage.getItem('lang')  || 'ar';
   this.translate.use(lang);
   document.documentElement.lang = lang;
 }



  ngOnInit() {

  this.getCustomer();


  }

  goCustomerList(){
  this.router.navigate(['/sales/customer/customer/'])
  }

  public getCustomer(){
   this.customerId= this.activateRoute.snapshot.params['id'];
  this.customerService.getCustomerById(this.customerId)
  .subscribe(data => {
    this.customer = data;
    console.log(data)
  }, error => console.log(error));


  }


  public onDeleteCustomer(customer): void {

  this.customerService.deleteCustomer(this.customer).subscribe(
  (response) => {
  console.log(response);
  Swal.fire('Success', 'Delete Information is Updated', 'success')
  this.goCustomerList();
  },
  (error: HttpErrorResponse) => {
  alert(error.message);
  Swal.fire('Error!! ', 'Error while update Delete', 'error')
  }
  );
  }

  }



