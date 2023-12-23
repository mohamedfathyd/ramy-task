import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../../global/global-state';

@Component({
  selector: 'view-market-responses',
  templateUrl: './view-market-responses.component.html',
  styleUrls: ['./view-market-responses.component.scss'],
})
export class ViewMarketResponsesComponent extends GlobalState implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() { }

}
