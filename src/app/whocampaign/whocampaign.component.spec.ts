import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhocampaignComponent } from './whocampaign.component';

describe('WhocampaignComponent', () => {
  let component: WhocampaignComponent;
  let fixture: ComponentFixture<WhocampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhocampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhocampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
