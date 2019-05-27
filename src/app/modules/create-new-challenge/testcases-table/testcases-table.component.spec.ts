import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcasesTableComponent } from './testcases-table.component';

describe('TestcasesTableComponent', () => {
  let component: TestcasesTableComponent;
  let fixture: ComponentFixture<TestcasesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcasesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcasesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
