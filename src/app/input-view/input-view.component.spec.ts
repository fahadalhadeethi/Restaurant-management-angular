import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputViewComponent } from './input-view.component';

describe('InputViewComponent', () => {
  let component: InputViewComponent;
  let fixture: ComponentFixture<InputViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
