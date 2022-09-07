import { Component, OnInit } from '@angular/core';
import { JournalVoucher } from '../jour-voucher';

@Component({
  selector: 'app-edit-jour-voucher',
  templateUrl: './edit-jour-voucher.component.html',
  styleUrls: ['./edit-jour-voucher.component.scss']
})
export class EditJourVoucherComponent implements OnInit {
  journalVoucherId!: number;
  journalVoucherData!: JournalVoucher;

  constructor() { }

  ngOnInit() {
  }

}
