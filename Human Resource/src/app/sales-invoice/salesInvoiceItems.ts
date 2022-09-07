import { Items } from "../items/items";
import { SalesInvoice } from "./sales-invoice";

export interface InvoiceItemsSalesInvoice {
    salesInvoiceItemId: string;
    salesInvoiceItemQuantity: string;
    salesInvoiceItemValue: string;
    salesInvoiceItemTotal: string;
    salesInvoice: SalesInvoice;
    item: Items;
  }