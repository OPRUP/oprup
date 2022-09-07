import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateItemsComponent } from './create-items/create-items.component';
import { DeleteItemsComponent } from './delete-items/delete-items.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { PrintItemsComponent } from './print-items/print-items.component';
import { ItemsComponent } from './items/items.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'items',
        component: ItemsComponent,
      },
      {
        path: 'create-items',
        component: CreateItemsComponent,
      },
      {
        path: 'edit-items/:id',
        component: EditItemsComponent,
      },
      {
        path: 'delete-items/:id',
        component: DeleteItemsComponent,
      },   {
        path: 'print-items',
        component:PrintItemsComponent,
      },
    ]
    }


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class ItemsRoutingModule { }
