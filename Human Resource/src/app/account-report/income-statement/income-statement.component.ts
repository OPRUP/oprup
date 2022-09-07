import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoaService } from 'src/app/coa/coa.service';
import { AccountReportService } from '../account-report.service';

@Component({
  selector: 'app-income-statement',
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.scss']
})
export class IncomeStatementComponent implements OnInit {

  constructor( private router: Router,
    private coaService:CoaService,
    private accountReportService:AccountReportService,
    private translate: TranslateService) { }
  displayArray :any[]=[]
  accounts
  startDate;
  endDate;
totalFirstBalance=0
totalPurchasing=0
totalGoods=0
totalCostGoods=0
directExpenses=0
crossProfit=0
generalExpense=0
netProfit=0
  ngOnInit(): void {
  }
  getBalance(open=0,pur=0,good=0,cost=0,expense=0,profit=0,genExpense=0,net=0){
    this.accounts=null
  this.displayArray =[]
  this.totalFirstBalance=0
  this.totalPurchasing=0
  this.totalGoods=0
  this.totalCostGoods=0
  this.directExpenses=0
  this.crossProfit=0
  this.netProfit=0
  this.generalExpense=0
  let openDate = new Date(this.startDate);
  openDate.setDate(openDate.getDate() - 1);

    this.coaService.getAccountByParent(7).subscribe(data=>{
      this.accounts=data

      this.accounts.forEach(account => {
       open=0


        this.accountReportService.getJourById(account.accountId).subscribe(data=>{

          data.forEach(element => {


             if (new Date(element.journalVoucher.dateVoucher.toString()) >= new Date((new Date().getFullYear +'-01-01').toString())
              && new Date(element.journalVoucher.dateVoucher.toString()) <= new Date(openDate.toString()))

             {
            open+=Number(element.debit)-Number(element.credit)
            }

          });


this.totalFirstBalance=open

         })
      });


    })

    ///Purchasing



    this.coaService.getAccountByParent(6).subscribe(data=>{
      this.accounts=data

      this.accounts.forEach(account => {
        pur=0


        this.accountReportService.getJourById(account.accountId).subscribe(data=>{

          data.forEach(element => {

             if (new Date(element.journalVoucher.dateVoucher.toString()) >= new Date((this.startDate).toString())
              && new Date(element.journalVoucher.dateVoucher.toString()) <= new Date(this.endDate.toString()))

             {
              pur+=Number(element.debit)-Number(element.credit)
            }

          });


this.totalPurchasing=pur

         })
      });


    })

////////Goods As Per
this.coaService.getAccountByParent(6).subscribe(data=>{
  this.accounts=data

  this.accounts.forEach(account => {
   good=0


    this.accountReportService.getJourById(account.accountId).subscribe(data=>{

      data.forEach(element => {


         if (new Date(element.journalVoucher.dateVoucher.toString()) >= new Date((this.startDate).toString())
          && new Date(element.journalVoucher.dateVoucher.toString()) <= new Date(this.endDate.toString()))

         {
          good+=Number(element.debit)-Number(element.credit)
        }

      });


this.totalGoods=good

     })
  });
/////////Cost of Goods Sold
 this.totalCostGoods=this.totalFirstBalance+this.totalPurchasing-this.totalGoods


 /////// Total Expense
this.coaService.getAccountByParent(301).subscribe(data=>{
  this.accounts=data

  this.accounts.forEach(account => {
   expense=0


    this.accountReportService.getJourById(account.accountId).subscribe(data=>{

      data.forEach(element => {


         if (new Date(element.journalVoucher.dateVoucher.toString()) >= new Date((this.startDate).toString())
          && new Date(element.journalVoucher.dateVoucher.toString()) <= new Date(this.endDate.toString()))

         {
        expense+=Number(element.debit)-Number(element.credit)
        }

      });


this.directExpenses=expense

     })
  });


})
/////////////Cross Profit

this.crossProfit=this.directExpenses-this.totalCostGoods


/////// General Expense
this.coaService.getAccountByParent(302).subscribe(data=>{
  this.accounts=data

  this.accounts.forEach(account => {
    genExpense=0


    this.accountReportService.getJourById(account.accountId).subscribe(data=>{

      data.forEach(element => {


         if (new Date(element.journalVoucher.dateVoucher.toString()) >= new Date((this.startDate).toString())
          && new Date(element.journalVoucher.dateVoucher.toString()) <= new Date(this.endDate.toString()))

         {
        genExpense+=Number(element.debit)-Number(element.credit)
        }

      });


this.generalExpense=expense

     })



     this.netProfit=this.crossProfit-this.generalExpense
  });


})

})

  }

}
