import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewReplyesPageRoutingModule } from './view-replyes-routing.module';

import { ViewReplyesPage } from './view-replyes.page';
import { ViewMarketResponsesComponent } from './components/view-market-responses/view-market-responses.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewReplyesPageRoutingModule
  ],
  declarations: [ViewReplyesPage, ViewMarketResponsesComponent]
})
export class ViewReplyesPageModule { }
