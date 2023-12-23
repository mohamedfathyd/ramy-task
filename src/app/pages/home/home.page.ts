import { Component, ElementRef, ViewChild } from '@angular/core';
import { GlobalState } from '../../global/global-state';
import Swiper from 'swiper';
import { Router } from '@angular/router';
import { AnimationController, ModalController } from '@ionic/angular';

import { HomeService } from './servcies/home.service';
import { GlobalVariablesService } from '../../servcies/global-variables.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends GlobalState {
  constructor(public router: Router, private modalCtrl: ModalController,
    private globals:GlobalVariablesService,
    private animationCtrl: AnimationController,private service:HomeService) {
    super();
   
  }
  sendQuestion() {
    this.router.navigate(['send-question']);
  }
}
