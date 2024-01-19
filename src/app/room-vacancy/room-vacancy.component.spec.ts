import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomVacancyComponent } from './room-vacancy.component';

describe('RoomVacancyComponent', () => {
  let component: RoomVacancyComponent;
  let fixture: ComponentFixture<RoomVacancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomVacancyComponent]
    });
    fixture = TestBed.createComponent(RoomVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
