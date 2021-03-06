import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExerciseComponent } from './list-exercise.component';

describe('ListExerciseComponent', () => {
  let component: ListExerciseComponent;
  let fixture: ComponentFixture<ListExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
