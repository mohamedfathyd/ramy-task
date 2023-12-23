import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../global/global-state';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HomeService } from '../home/servcies/home.service';
import { GlobalVariablesService } from '../../servcies/global-variables.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage extends GlobalState implements OnInit {

  constructor(public router: Router, private globals: GlobalVariablesService,
    private route: ActivatedRoute, private service: HomeService,
    private modalCtrl: ModalController) { 
    super();
    this.social();
  }
  branches() {
    this.router.navigate(['branches'], { replaceUrl: true });
    this.modalCtrl.dismiss();
  }
  beneficiary() {
    this.router.navigate(['beneficiary'], { replaceUrl: true });
    this.modalCtrl.dismiss();
  }
  help() {
    this.router.navigate(['helps'], { replaceUrl: true });
    this.modalCtrl.dismiss();
  }
  manasa() {
    window.location.href = "https://lms.hsstli.com/login/index.php";
    this.modalCtrl.dismiss();
  }
  ourBranches() {
    this.router.navigate(['our-branches'], { replaceUrl: true });
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
  }
  aboutUs() {
    this.router.navigate(['about-us'], { replaceUrl: true });
    this.modalCtrl.dismiss();
  }
  blogs() {
    this.router.navigate(['blogs'], { replaceUrl: true });
    this.modalCtrl.dismiss();
  }
  register() { 
    this.router.navigate(['register'], { replaceUrl: true });
    this.modalCtrl.dismiss();
  }
  login() {
    this.router.navigate(['login'], { replaceUrl: true });
    this.modalCtrl.dismiss();
  }
  socialList;
  social() {
    this.globals.presentLoading();
    this.socialList = [];
    this.service.social().subscribe(async res => {
      this.globals.dismissLoading();
      this.socialList= res;
    })
  }
  goToLink(link) {
    window.location.href = link;
  }
}
