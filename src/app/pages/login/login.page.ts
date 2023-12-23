
import { validateInput } from "src/app/util/custom-validation";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";


//login-old
import { Component, ChangeDetectorRef, OnInit } from "@angular/core";
import {
  ModalController,
  Platform,
  AlertController,
  NavController,
} from "@ionic/angular";


import { Storage } from "@ionic/storage";

import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { GlobalVariablesService } from "../../servcies/global-variables.service";
import { GlobalState } from "../../global/global-state";
import { LoginService } from "./servcies/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage extends GlobalState implements OnInit {
  userName;
  password;
  viewPassbool = false;
  lang = localStorage.getItem('lang');
  async ngOnInit() {
   
  }
  register() {
    this.router.navigate(['register'], { replaceUrl: true });
  }
  reset() {
    this.router.navigate(['forget-password'], { replaceUrl: true });
  }
  
  viewPass(value) {
    this.viewPassbool = value;
  }
  

  constructor(public router: Router, private globals: GlobalVariablesService,
  private service:LoginService) {
    super();
  }

  validate() {
   
   
  }

  setUserLanguage(userLang: "ar" | "en") {
    userLang = userLang || "en";
  }
  async login() {
    this.router.navigate(["tabs"], { replaceUrl: true });
   //await this.globals.presentLoading();
    // let body = {
    //     userName:this.userName,
    //     password:this.password,
    //   }
    // this.service.Login(body).subscribe(res => {
    //   this.globals.dismissLoading();
    //   if (res.status==200) {
    //       this.router.navigate(["tabs"], { replaceUrl: true });
    //       localStorage.setItem("userName", this.userName);
    //       localStorage.setItem("password", this.password);
    //       localStorage.setItem('userToken', res.token);
    //       localStorage.setItem('displayName', res.user_display_name);
    //       localStorage.setItem('email', res.user_email);
    //   }
    //   else {
    //      this.globals.presentToast(res.data.messageAr);
    //   }
   // })
  }
  visitor() {
    this.router.navigate(["tabs"], { replaceUrl: true });
  }
}
