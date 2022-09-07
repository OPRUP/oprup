import { Purchasing } from "./purchasing";

export interface PurchasingItem {

  // purchasingItemId: string;
  // itemCode: string;
  // itemName: string;
  // nationality: string;
  //numberOfHoursForEachEmployee: string;
  // profession: string;
  // deleteFlage: number;
  // numberOfEmployees: string;
  purchasing?:Purchasing[];
  item: { itemId: string },

  purchasingItemId: string,
  numberOfEmployee: string,
  purchasingItemQuantity: string,
  purchasingItemValue: string,
  purchasingItemTotal:string,

}
