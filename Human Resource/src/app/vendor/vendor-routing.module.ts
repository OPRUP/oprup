import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { DeleteVendorComponent } from './delete-vendor/delete-vendor.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { PrintVendorComponent } from './print-vendor/print-vendor.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vendor',
        component: VendorComponent,
      },
      {
        path: 'create-vendor',
        component: CreateVendorComponent,
      },
      {
        path: 'edit-vendor/:id',
        component: EditVendorComponent,
      },
      {
        path: 'delete-vendor/:id',
        component: DeleteVendorComponent,
      },   {
        path: 'print-vendor',
        component:PrintVendorComponent,
      },
    ]
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class VendorRoutingModule { }
