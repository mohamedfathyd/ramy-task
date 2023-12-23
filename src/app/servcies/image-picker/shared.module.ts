import { TranslateModule } from '@ngx-translate/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImagePickerComponent } from './image-picker.component';



@NgModule({
  declarations: [ImagePickerComponent],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule
  ],
  exports:[ImagePickerComponent]
})
export class SharedModule { }
