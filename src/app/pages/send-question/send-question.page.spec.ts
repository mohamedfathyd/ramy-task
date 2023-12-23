import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendQuestionPage } from './send-question.page';

describe('SendQuestionPage', () => {
  let component: SendQuestionPage;
  let fixture: ComponentFixture<SendQuestionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SendQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
