import { Items } from "../items/items";

export interface CreditNotice {
    creditNoticeId:string,

   creditNoticeNumber:string,
  creditNoticeType:string,
    clientAccount: { accountId: string },
    taxAccount: { accountId: string },
    salesAccount: { accountId: string },
    project: { projectId: string },
    customer:{customerId:string},
    employee: { employeeId: string },
    date: string,
    deleteFlag: number,
    amount: number,
    tax: string,
    total: number,
    costCenter:{costCenterId:string}
}
export interface ItemsCreditNotice {
  creditNoticeItemId: string;
  creditNoticeItemQuantity: string;
  creditNoticeItemValue: string;
  creditNoticeItemTotal: string;
  creditNotice: CreditNotice;
  item: Items;
}
