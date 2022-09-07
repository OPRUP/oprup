import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { CoaService } from 'src/app/coa/coa.service';

import { AccountReportService } from '../account-report.service';

@Component({
  selector: 'app-trial-balance',
  templateUrl: './trial-balance.component.html',
  styleUrls: ['./trial-balance.component.scss']
})
export class TrialBalanceComponent implements OnInit {

  constructor( private router: Router,
    private coaService:CoaService,
    private accountReportService:AccountReportService,
    private translate: TranslateService) { }
  displayArray :any[]=[]
  accounts
  startDate;
  endDate;
openbalance=0

  ngOnInit(): void {
    
  }

  getBalance(open=0,trans=0){
    this.accounts=null
  this.displayArray =[]

  let openDate = new Date(this.startDate);
  openDate.setDate(openDate.getDate() - 1);
 
    this.coaService.getAccountByType('sub').subscribe(data=>{
      this.accounts=data
    
      this.accounts.forEach(account => {
       open=0
       trans=0
        
        this.accountReportService.getJourById(account.accountId).subscribe(data=>{
         
          data.forEach(element => {
            
            // console.log("if date voucher ", new Date(element.journalVoucher.dateVoucher.toString()))
            //  console.log("if start year ", new Date((new Date().getFullYear() +'-01-01').toString()))
            // console.log("if open date ", new Date(openDate.toString()))
            // console.log("if end date ", new Date(this.endDate.toString()))

             if (new Date(element.journalVoucher.dateVoucher.toString()) >= new Date((new Date().getFullYear +'-01-01').toString())
              && new Date(element.journalVoucher.dateVoucher.toString()) <= new Date(openDate.toString()))
       
             {
            open+=Number(element.debit)-Number(element.credit)
            }
            else if (new Date(element.journalVoucher.dateVoucher.toString()) >= new Date((this.startDate).toString()) 
            && new Date(element.journalVoucher.dateVoucher.toString()) <= new Date(this.endDate.toString()))
       {
              trans+=Number(element.debit)-Number(element.credit)
       }
          });
 

if (open>0){
  if(trans>0){

  this.displayArray.push({
    accountCode:account.accountCode,
    accountName:account.accountName,
    
    openDebit:open,
    openCredit:0,
    transDebit:trans,
    transCredit:0,
    finalDebit:open+trans,
    finalCredit:0
    
  })
} else if(trans<0){
  this.displayArray.push({
    accountCode:account.accountCode,
    accountName:account.accountName,
    
    openDebit:open,
    openCredit:0,
    transDebit:0,
    transCredit:trans * -1,
    finalDebit:open,
    finalCredit:trans* -1

  })
}else{

  this.displayArray.push({
    accountCode:account.accountCode,
    accountName:account.accountName,
    
    openDebit:open,
    openCredit:0,
    transDebit:0,
    transCredit:0,
    finalDebit:open,
    finalCredit:0
    
  })
}
  
 
 
}
else if(open<0){

   if(trans>0){
  this.displayArray.push({ accountCode:account.accountCode,
    accountName:account.accountName,
    openDebit:0,
    openCredit:open* -1,
    transDebit:trans,
    transCredit:0,
    finalDebit:trans,
    finalCredit:open* -1
  })}
    else if(trans<0){
      this.displayArray.push({ accountCode:account.accountCode,
        accountName:account.accountName,
        openDebit:0,
        openCredit:open* -1,
        transDebit:0,
        transCredit:trans* -1,
        finalDebit:0,

    finalCredit:(open+trans)* -1
      })} 
    else if(trans=0){
      this.displayArray.push({ accountCode:account.accountCode,
        accountName:account.accountName,
        openDebit:0,
        openCredit:open * -1,
        transDebit:0,
        transCredit:0,
        finalDebit:0,
    finalCredit:open* -1
      })}
 
}else if (open=0){
  if(trans>0){
  this.displayArray.push({ accountCode:account.accountCode,
    accountName:account.accountName,
    openDebit:0,
    openCredit:0,
    transDebit:trans,
    transCredit:0,
    finalDebit:trans,
    finalCredit:0

     })
    }
    else if(trans<0){
      this.displayArray.push({ accountCode:account.accountCode,
        accountName:account.accountName,
        openDebit:0,
        openCredit:0,
        transDebit:0,
    transCredit:trans* -1,
    finalDebit:0,
    finalCredit:trans* -1
        
         })
        }
        if(trans=0){
          this.displayArray.push({ accountCode:account.accountCode,
            accountName:account.accountName,
            openDebit:0,
            openCredit:0,
            transDebit:0,
            transCredit:0,
            finalDebit:0,
            finalCredit:0
            
             })
            }
}

          open=0
          trans=0
         })
      });


    })
    
  }

  














  
}
