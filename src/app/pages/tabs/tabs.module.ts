import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [TabsComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsRoutingModule,
    TranslateModule
  ]
})
export class TabsModule { }
