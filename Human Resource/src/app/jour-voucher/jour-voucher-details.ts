import { JournalVoucher } from "./jour-voucher";

export interface JournalVoucherDetails {
  journalVoucherDetailsId: string;
  debit: string;
  credit: string;
  description: string;
  journalVoucher:{
    journalVoucherId:string;
    dateVoucher:string

  };
  chartAccounts: { accountId: string },
}
