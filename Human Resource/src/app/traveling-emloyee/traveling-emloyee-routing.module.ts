import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateTravelingEmployeeComponent } from './create-traveling-employee/create-traveling-employee.component';
import { DeleteTravelingEmployeeComponent } from './delete-traveling-employee/delete-traveling-employee.component';
import { EditTravelingEmployeeComponent } from './edit-traveling-employee/edit-traveling-employee.component';
import { PrintTravelingEmployeeComponent } from './print-traveling-employee/print-traveling-employee.component';
import { TravelingEmployeeComponent } from './traveling-employee/traveling-employee.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'TravelingEmloyee',
        component: TravelingEmployeeComponent,
      },
      {
        path: 'create-TravelingEmloyee',
        component: CreateTravelingEmployeeComponent,
      },
      {
        path: 'edit-TravelingEmloyee/:id',
        component: EditTravelingEmployeeComponent,
      },
      {
        path: 'delete-TravelingEmloyee/:id',
        component: DeleteTravelingEmployeeComponent,
      },   {
        path: 'print-TravelingEmloyee',
        component:PrintTravelingEmployeeComponent,
      },
    ]
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class TravelingEmloyeeRoutingModule { }
