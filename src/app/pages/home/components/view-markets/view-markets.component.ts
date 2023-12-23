import { Component, OnInit, Output } from '@angular/core';
import { GlobalState } from '../../../../global/global-state';

@Component({
  selector: 'view-markets',
  templateUrl: './view-markets.component.html',
  styleUrls: ['./view-markets.component.scss'],
})
export class ViewMarketsComponent extends GlobalState implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() { }
  viewDetailsAction() {
  }
}