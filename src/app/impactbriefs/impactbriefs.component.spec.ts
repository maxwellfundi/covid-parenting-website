import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactbriefsComponent } from './impactbriefs.component';

describe('ImpactbriefsComponent', () => {
  let component: ImpactbriefsComponent;
  let fixture: ComponentFixture<ImpactbriefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactbriefsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactbriefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
