import { Component } from '@angular/core';
import { TranslationService } from './servcies/translation.service';
import { register } from 'swiper/element/bundle';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public translation: TranslationService, private storage: Storage,
  private router:Router) {
    this.initializeApp(); 
    // if (localStorage.getItem("secondLogin") == 'true') {
    //   this.router.navigate(["login"]);
    // }
   }
  initializeApp() {
		this.translation.setDefault('ar');
  }
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
}
