import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesMapComponent } from './stories-map.component';

describe('StoriesMapComponent', () => {
  let component: StoriesMapComponent;
  let fixture: ComponentFixture<StoriesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
