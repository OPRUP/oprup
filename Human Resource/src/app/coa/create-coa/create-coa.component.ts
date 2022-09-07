import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Coa } from '../coa';
import { CoaService } from '../coa.service';

@Component({
  selector: 'app-create-coa',
  templateUrl: './create-coa.component.html',
  styleUrls: ['./create-coa.component.scss']
})
export class CreateCoaComponent implements OnInit {
  form: FormGroup = new FormGroup({
    parentAccount:new FormControl(''),
    accountName: new FormControl(''),
    accountType: new FormControl(''),
    accountCode: new FormControl(''),

});
  coaData = {
    accountId: '',
    parentAccount: '',
    accountName:  '',
    accountType:'',
    accountCode:'',
    accountDescription:'',
    deleteFlag: 1,
  };

  accounts:any[]=[]
  codes:any[]=[]


   constructor(
    public fb: FormBuilder,

    private coaService: CoaService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }
   ngOnInit() {
    this.getAllAccounts()
    this.form = this.fb.group(
      {
        parentAccount:['', Validators.required],
        accountName:['',Validators.required],
        accountType: ['',Validators.required],
        accountCode: ['',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],

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
        return element.accountType=='main'
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
   GenerateAccountCode(event){
    this.coaService.getAccountsByParent(event).subscribe((data:any)=>{
    if(data.length == 0){
       this.coaData.accountCode=event+'0'
       console.log(event);
      }
    else{
      console.log(data);

      let max=0;
      data.forEach(element=>{
        Number(element.accountCode)>max?max=Number(element.accountCode):''
      })
      this.coaData.accountCode=(max+1).toString()
    }
    })
    console.log(this.coaData.accountCode);

   }
   public onAddAccounts(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if(this.codes.includes(this.coaData.accountCode)){
      Swal.fire(this.translate.instant('Error'), this.translate.instant('accountcodeisexist,trytochangeit!'), 'error')
      return
    }

     this.coaService.addAcount(this.coaData).subscribe(
       (response) => {

         console.log(response);
         Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
         this.coaService.getCoa();
         this.goAccountList();
       },
       (error: HttpErrorResponse) => {
        console.log(this.coaData);

         alert(error.message);
         Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'),
         'error')
         }
     );
      }

}
