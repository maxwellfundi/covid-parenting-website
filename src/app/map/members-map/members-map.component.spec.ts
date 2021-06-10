import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersMapComponent } from './members-map.component';

describe('MembersMapComponent', () => {
  let component: MembersMapComponent;
  let fixture: ComponentFixture<MembersMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
