import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'Survey',
        component:SurveyComponent,
      },]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class SurveyRoutingModule { }
