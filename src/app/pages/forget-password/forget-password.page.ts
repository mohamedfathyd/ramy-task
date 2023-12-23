import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalState } from '../../global/global-state';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage extends GlobalState implements OnInit {
  pin;
  phone;
  password;
  newPassword;
  viewPassbool = false;
  constructor(public router: Router) {
    super();
   }
   viewPass(value) {
    this.viewPassbool = value;
   }
  login() {
    this.router.navigate(['login'], { replaceUrl: true });
   }
   reset(){}
  ngOnInit() {
  }

}
