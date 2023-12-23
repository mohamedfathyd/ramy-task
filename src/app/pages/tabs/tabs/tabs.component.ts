import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalState } from '../../../global/global-state';
import { ModalController, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent extends GlobalState implements OnInit {
 
  constructor(private router: Router, private modalCtrl: ModalController,
    private animationCtrl: AnimationController) { 
    super();
  }

  ngOnInit() { }
}
