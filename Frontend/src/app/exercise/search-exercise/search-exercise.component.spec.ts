import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExerciseComponent } from './search-exercise.component';

describe('SearchExerciseComponent', () => {
  let component: SearchExerciseComponent;
  let fixture: ComponentFixture<SearchExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
