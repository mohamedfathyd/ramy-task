
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { TranslationService } from './translation.service';
import { ToastController, AlertController, LoadingController, Platform } from '@ionic/angular';
//import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { TranslateService } from '@ngx-translate/core';
@Injectable({ providedIn: 'root' })
export class GlobalVariablesService {
  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    //private socialSharing: SocialSharing,
    public storage: Storage, public translate: TranslateService, private platform: Platform) { }
 
  private loader;
  
  async presentToast(message, duration = 3) {
    const toast = await this.toastCtrl.create({
      message:message,
      duration: duration * 1000,
      position: 'middle',
    });
    await toast.present();
  }
  async presentToastTranslate(message, duration = 3) {
    message = await this.translate.instant(message);
    const toast = await this.toastCtrl.create({
      message:message,
      duration: duration * 1000,
      position: 'middle',
    });
    await toast.present();
  }
  async presentAlert(title, message) {
    const translated = await this.translate.instant([title, message, 'Dismiss']);
    const alert = await this.alertCtrl.create({
      header: translated[title],
      subHeader: translated[message],
      buttons: ["حسناً"]
    });
    await alert.present();
  }

  
  async presentLoading() {
    this.loader = '';
    this.loader = await this.loadingCtrl.create({
      cssClass: 'custom-loader',
      spinner: null
    });
    await this.loader.present();
  }
  dismissLoading() {
    if (this.loader) {
      this.loader.dismiss();
      this.loader = null;
    }
  }
  
}
