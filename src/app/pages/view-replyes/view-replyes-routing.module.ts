import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewReplyesPage } from './view-replyes.page';

const routes: Routes = [
  {
    path: '',
    component: ViewReplyesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewReplyesPageRoutingModule {}
