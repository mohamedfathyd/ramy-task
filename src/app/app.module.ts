import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslationService } from './servcies/translation.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor';
import { AvatarCreate } from './servcies/avatar-create';
import { GlobalVariablesService } from './servcies/global-variables.service';
import { UploadImageService } from './servcies/uploadImage.Service';
import { Storage } from '@ionic/storage-angular';
import ar from '@angular/common/locales/ar';
import fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
registerLocaleData(ar);
registerLocaleData(fr);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule
    , TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    }
}),],
  providers: [TranslationService,Storage,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },AvatarCreate, GlobalVariablesService, UploadImageService
    ,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
