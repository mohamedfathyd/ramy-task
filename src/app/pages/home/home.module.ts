import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ViewMarketResponsesComponent } from '../view-replyes/components/view-market-responses/view-market-responses.component';
import { ViewMarketsComponent } from './components/view-markets/view-markets.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

  ],
  declarations: [HomePage, ViewMarketsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }
