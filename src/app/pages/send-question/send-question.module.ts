import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendQuestionPageRoutingModule } from './send-question-routing.module';

import { SendQuestionPage } from './send-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendQuestionPageRoutingModule
  ],
  declarations: [SendQuestionPage]
})
export class SendQuestionPageModule {}
