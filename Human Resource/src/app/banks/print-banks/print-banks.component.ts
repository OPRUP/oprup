import { BankService } from './../bank.service';
import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-print-banks',
  templateUrl: './print-banks.component.html',
  styleUrls: ['./print-banks.component.scss']
})
export class PrintBanksComponent implements OnInit {

  displayedColumns: string[] = [

    'bankId',
    'bankName',
    'description',
    // 'deleteFlag'
  ]
  constructor(private service: BankService) { }
  Bank;
  ngOnInit(): void {
    this.getAllBanks();
  }
  public getAllBanks(): void {
    this.service.getBanks().subscribe(
      (response:Bank[]) => {
      this.Bank = new MatTableDataSource(response);
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );

  }
  printPage() {

    window.print();
  }

}
