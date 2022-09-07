import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreatePurchasingComponent } from './create-purchasing/create-purchasing.component';
import { DeletePurchasingComponent } from './delete-purchasing/delete-purchasing.component';
import { EditPurchasingComponent } from './edit-purchasing/edit-purchasing.component';
import { PrintPurchasingComponent } from './print-purchasing/print-purchasing.component';
import { PurchasingComponent } from './purchasing/purchasing.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create-purchasing',
        component: CreatePurchasingComponent,

      },
      {
        path: 'purchasing',
        component: PurchasingComponent,

      },
      {
        path: 'delete-purchasing/:id',
        component: DeletePurchasingComponent,

      },
      {
        path: 'edit-purchasing/:id',
        component: EditPurchasingComponent,

      },
      {
        path: 'print-purchasing/:id',
        component: PrintPurchasingComponent,

      },


    ]
  },


]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class PurchasingRoutingModule { }
