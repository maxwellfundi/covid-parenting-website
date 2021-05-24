import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Socialmedia2Component } from './socialmedia2.component';

describe('Socialmedia2Component', () => {
  let component: Socialmedia2Component;
  let fixture: ComponentFixture<Socialmedia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Socialmedia2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Socialmedia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
