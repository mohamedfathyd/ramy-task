import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../global/global-state';
import { Router } from '@angular/router';
import { GlobalVariablesService } from '../../servcies/global-variables.service';
import { LoginService } from '../login/servcies/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage extends GlobalState implements OnInit {
  name;
  phone;
  password;
  viewPassbool = false;
  constructor(public router: Router, private globals: GlobalVariablesService,
  private service:LoginService) {
    super();
   }
   viewPass(value) {
    this.viewPassbool = value;
   }
  login() {
    this.router.navigate(['login'], { replaceUrl: true });
  }
  
  async register() {
    await this.globals.presentLoading();
    let body = {
        phone:this.phone,
        password:this.password,
      }
    this.service.Register(body).subscribe(res => {
      this.globals.dismissLoading();
      if (res.status==200) {
        this.router.navigate(['login'], { replaceUrl: true });
        this.globals.presentToast("تم أنشاء الحساب بنجاح");
      }
      else {
         this.globals.presentToast(res.data.messageAr);
      }
    })
  }
  ngOnInit() {
  }

}
