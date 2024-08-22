import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialog3Component } from './confirm-dialog3.component';

describe('ConfirmDialog3Component', () => {
  let component: ConfirmDialog3Component;
  let fixture: ComponentFixture<ConfirmDialog3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialog3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDialog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
