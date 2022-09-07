export interface SalesInvoice {
  salesInvoiceId: string;
  salesInvoiceNumber: string;
  salesInvoiceType: string;
  clientAccount: { accountId: string };
  cashAccount: { accountId: string };
  taxAccount: { accountId: string };
  salesAccount: { accountId: string };
  costCenter: { costCenterId: string };

  project: { projectId: string };
  date: string;
  employee: { employeeId: string };
  amount: number;
  tax: string;
  total: number;
}
export interface InvoiceItems {
  salesInvoiceItemId: string;
  salesInvoiceItemQuantity: string;
  salesInvoiceItemValue: string;
  salesInvoiceItemTotal: string;
  salesInvoice: SalesInvoice[];
  item: { itemId: string };
}
