import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../global/global-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-question',
  templateUrl: './send-question.page.html',
  styleUrls: ['./send-question.page.scss'],
})
export class SendQuestionPage extends GlobalState implements OnInit {

  constructor(private router:Router) {
    super();
   }

  ngOnInit() {
  }
  back() { 
    this.router.navigate(['tabs'], { replaceUrl: true });
  }
  sendMessage() {
    
  }
}
