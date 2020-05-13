import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyManagementComponent } from './money-management.component';

describe('MoneyManagmentComponent', () => {
  let component: MoneyManagementComponent;
  let fixture: ComponentFixture<MoneyManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
