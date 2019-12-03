import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionForCompetitionComponent } from './action-for-competition.component';

describe('ActionForCompetitionComponent', () => {
  let component: ActionForCompetitionComponent;
  let fixture: ComponentFixture<ActionForCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionForCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionForCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
