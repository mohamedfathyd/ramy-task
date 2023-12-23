import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendQuestionPage } from './send-question.page';

const routes: Routes = [
  {
    path: '',
    component: SendQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendQuestionPageRoutingModule {}
