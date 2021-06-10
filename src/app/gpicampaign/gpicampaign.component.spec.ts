import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpicampaignComponent } from './gpicampaign.component';

describe('GpicampaignComponent', () => {
  let component: GpicampaignComponent;
  let fixture: ComponentFixture<GpicampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpicampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpicampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
