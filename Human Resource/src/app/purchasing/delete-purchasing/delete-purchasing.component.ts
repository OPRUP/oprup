import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Purchasing } from '../purchasing';
import { PurchasingService } from '../purchasing.service';

@Component({
  selector: 'app-delete-purchasing',
  templateUrl: './delete-purchasing.component.html',
  styleUrls: ['./delete-purchasing.component.scss']
})
export class DeletePurchasingComponent implements OnInit {

 // constructor() { }

  // ngOnInit(): void {
  // }
  quotationId!: number;
  purchasing!: Purchasing;
  purchasings!: Purchasing[];


  constructor(private purchasingService: PurchasingService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
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
    this.purchasingService.getPurchasingById(this.quotationId)
    .subscribe(data => {
      console.log('teeeeest',data)
      this.purchasing = data;
    }, error => console.log(error));
  }


  public onDeleteQuotation(quotationId:number){
    this.purchasingService.deletePurchasing(quotationId).subscribe( data => {
      console.log(data);
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goQuotationList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')    }
    );
  }

  public getAllQuotation(): void {
    this.purchasingService.getAllPurchasings().subscribe(
      (response: Purchasing[]) => {
        this.purchasings = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goQuotationList(){
    this.router.navigate(['/purchase/purchasing/purchasing'])
  }


}
