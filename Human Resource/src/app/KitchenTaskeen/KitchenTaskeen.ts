export interface KitchenTaskeen {
  kitchenId:string;
  kitchenCode: string;
  gascylinders: string;
  gasStoves: string;
  tools: string;
  description: string;
  deleteFlag: number;
  taskeens:{
    habitationId: String;
    habitationName
  }
}
