import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DeleteQuotationComponent } from './delete-quotation/delete-quotation.component';
import { EditQuotationComponent } from './edit-quotation/edit-quotation.component';
import { PrintQuotationComponent } from './print-quotation/print-quotation.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { ViewQuotationComponent } from './view-quotation/view-quotation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'quotations',//create 
        component: QuotationsComponent,
      },
     

      {
        path: 'view-quotation',//display
        component:ViewQuotationComponent ,
      },
      {
        path: 'edit-quotation/:id',
        component: EditQuotationComponent,
      },

      {
        path: 'delete-quotation/:id',
        component: DeleteQuotationComponent,
      },
      {
        path: 'print-quotation/:id',
        component: PrintQuotationComponent,
      },



    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class QuotationRoutingModule { }
