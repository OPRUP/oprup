import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { CoaService } from '../coa.service';

@Component({
  selector: 'app-edit-coa',
  templateUrl: './edit-coa.component.html',
  styleUrls: ['./edit-coa.component.scss']
})
export class EditCoaComponent implements OnInit {

  form: FormGroup = new FormGroup({
    parentAccount:new FormControl(''),
    accountName: new FormControl(''),
    accountType: new FormControl(''),
    accountCode: new FormControl(''),

});
  coaData
  accountId!: number
  accounts:any[]=[]
  codes:any[]=[]


   constructor(
    public fb: FormBuilder,

    private coaService: CoaService, private router: Router, private translate: TranslateService,    private activateRoute: ActivatedRoute,
    ){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }
   ngOnInit() {

    this.getAccountById()
    this.getAllAccounts()
    this.form = this.fb.group(
      {
        parentAccount:['', Validators.required],
        accountName:['',Validators.required],
        accountType: ['',Validators.required],
        accountCode: ['',Validators.required],

   })}
   submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }
   goAccountList(){
     this.router.navigate(['/finance/coa/coa'])
   }
   getAllAccounts(){
    this.coaService.getCoa().subscribe((data)=>{


      const filtered=data.filter((element)=>{
        return element.accountType=='main' && element.accountId != this.accountId
      })
      for (let i = 1; i <=8; i++) {
        filtered.forEach(element => {
          if(element.accountCode.toString()[0] ==i)
          this.accounts.push(element)
        });

      }
      console.log('accounnnnt',this.accounts);


    })
   }
   getAccountById(){
    this.accountId = this.activateRoute.snapshot.params['id'];
    this.coaService.getAccountById(this.accountId).subscribe((data)=>{
      this.coaData=data
            console.log('accounts',this.coaData);

    })
  }
   public onUpdateAccounts(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if(this.codes.includes(this.coaData.accountCode)){
      Swal.fire(this.translate.instant('Error'), this.translate.instant('accountcodeisexist,trytochangeit!'), 'error')
      return
    }
     this.coaService.updateAccount(this.coaData).subscribe(
       (response) => {

         console.log(response);
         Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
         this.coaService.getCoa();
         this.goAccountList();
       },
       (error: HttpErrorResponse) => {


        console.log(error);
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
       }
     );
      }

}
