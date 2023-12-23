import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { StartPageComponent } from './start-page.component';


@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StartPageModule { }
