import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavtipsComponent } from './favtips.component';

describe('FavtipsComponent', () => {
  let component: FavtipsComponent;
  let fixture: ComponentFixture<FavtipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavtipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavtipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
