/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RmysComponent } from './rmys.component';

describe('RmysComponent', () => {
  let component: RmysComponent;
  let fixture: ComponentFixture<RmysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
