import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Coa } from '../coa';
import { CoaService } from '../coa.service';

@Component({
  selector: 'app-print-coa',
  templateUrl: './print-coa.component.html',
  styleUrls: ['./print-coa.component.scss']
})
export class PrintCoaComponent implements OnInit {
 accountId;
 coaData
 displayedColumns: string[] = [

  'accountName',

  // 'deleteFlag'
]
   constructor(


    private coaService: CoaService, private router: Router, private translate: TranslateService,    private activateRoute: ActivatedRoute,
    ){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }
   ngOnInit() {

    this.getAccountById()
    }

   goAccountList(){
     this.router.navigate(['/finance/coa/coa'])
   }

   getAccountById(){
    this.accountId = this.activateRoute.snapshot.params['id'];
    this.coaService.getAccountById(this.accountId).subscribe((data:any)=>{
      this.coaData=new MatTableDataSource([data]);
            console.log('accounts',this.coaData);

    })
  }

      printPage() {

        window.print();
      }

}
