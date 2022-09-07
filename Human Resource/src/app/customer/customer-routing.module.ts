import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

import { PrintCustomerComponent } from './print-customer/print-customer.component';
import { QualifiedCustomerComponent } from './qualified-customer/qualified-customer.component';
import { TransferCustomerComponent } from './transfer-customer/transfer-customer.component';
import { UnQulifiedCustomerComponent } from './un-qulified-customer/un-qulified-customer.component';

const routes: Routes = [


  {
    path: '',
    children: [
      {
        path: 'customer',
        component: CustomerComponent,
      },
      {
      path: 'create-customer',
        component: CreateCustomerComponent,
      },
      {
        path: 'edit-customer/:id',
        component:EditCustomerComponent,
      },
      {
        path:'delete-customer/:id',
        component: DeleteCustomerComponent,
      },   {
        path: 'print-customer/:id',
        component:PrintCustomerComponent,
      },
   {
      path: 'qualified-customer/:id',
      component:QualifiedCustomerComponent,
    },
    {
      path: 'transfer-customer/:id',
      component:TransferCustomerComponent,
    },
    {
      path: 'unqualified-customer/:id',
      component:UnQulifiedCustomerComponent,
    },
    
    ]
    }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class CustomerRoutingModule { }
