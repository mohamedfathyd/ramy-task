import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-replyes',
  templateUrl: './view-replyes.page.html',
  styleUrls: ['./view-replyes.page.scss'],
})
export class ViewReplyesPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  sendQuestion() {
    this.router.navigate(['send-question']);
  }
}
