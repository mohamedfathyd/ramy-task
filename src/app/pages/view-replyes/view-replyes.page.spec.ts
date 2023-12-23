import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewReplyesPage } from './view-replyes.page';

describe('ViewReplyesPage', () => {
  let component: ViewReplyesPage;
  let fixture: ComponentFixture<ViewReplyesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewReplyesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
