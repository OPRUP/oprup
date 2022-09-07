import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CostCenterComponent } from './cost-center/cost-center.component';
import { CreateCostcenterComponent } from './create-costcenter/create-costcenter.component';
import { DeleteCostcenterComponent } from './delete-costcenter/delete-costcenter.component';
import { EditCostcenterComponent } from './edit-costcenter/edit-costcenter.component';
import { PrintCostcenterComponent } from './print-costcenter/print-costcenter.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'cost-center',
        component: CostCenterComponent,
      },
      {
        path: 'create-costcenter',
        component: CreateCostcenterComponent,
      },
      {
        path: 'edit-costcenter/:id',
        component: EditCostcenterComponent,
      },
      {
        path: 'print-costcenter',
        component: PrintCostcenterComponent,
      },
      {
        path: 'delete-costcenter/:id',
        component:DeleteCostcenterComponent,
      },

    ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class CostCenterRoutingModule { }
