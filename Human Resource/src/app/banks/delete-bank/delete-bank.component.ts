import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Bank } from '../bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-delete-bank',
  templateUrl: './delete-bank.component.html',
  styleUrls: ['./delete-bank.component.scss']
})
export class DeleteBankComponent implements OnInit {
  bankId!: number;
  bank!: Bank;
  banks!: Bank[];


  constructor(private bankService: BankService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getBank();
  }

  public getBank(){
    this.bankId = this.activateRoute.snapshot.params['id'];
    this.bankService.getBankById(this.bankId)
    .subscribe(data => {

      this.bank = data;
    }, error => console.log(error));
  }


  public onDeleteBank(bank: Bank){
    this.bankService.deleteBank(bank).subscribe( data => {

      // Swal.fire('Success', 'Bank is Deleted', 'success')
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goBankList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      // Swal.fire('Error!! ', 'Error while delete Bank', 'error')
      Swal.fire(this.translate.instant('Error!!'), this.translate.instant('ErrorwhiledeletingData'), 'error')

    }
    );
  }

  public getAllBanks(): void {
    this.bankService.getBanks().subscribe(
      (response: Bank[]) => {
        this.banks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goBankList(){
    this.router.navigate(['/banks/banks'])
  }


}
