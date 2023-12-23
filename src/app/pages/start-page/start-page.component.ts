import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalState } from '../../global/global-state';
import Swiper from 'swiper';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent extends GlobalState implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  index = 0;
  constructor(public router: Router,) { 
    super();
  }

  ngOnInit() { }
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  swiperSlideChanged(e: any) {
    this.index = e.target.swiper.activeIndex;
  }
  next() {
    if(this.index<2)
    this.swiperRef?.nativeElement.swiper.slideNext()
    else
    this.router.navigate(['login'], { replaceUrl: true });
  }
  onStart() {
    this.router.navigate(['login'], { replaceUrl: true });
  }

}
