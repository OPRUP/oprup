import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SheetsComponent } from './sheets/sheets.component';

const routes: Routes = [
 { path: '',
    children: [
      // {
      //   path: '',
      //   component: ViewSheetComponent,
      // },
      {
        path: 'sheets',
        component: SheetsComponent,
      },
       
     
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class SheetRoutingModule { }
