import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundersMapComponent } from './funders-map.component';

describe('FundersMapComponent', () => {
  let component: FundersMapComponent;
  let fixture: ComponentFixture<FundersMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundersMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundersMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
