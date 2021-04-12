import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMealsComponent } from './delete-meals.component';

describe('DeleteMealsComponent', () => {
  let component: DeleteMealsComponent;
  let fixture: ComponentFixture<DeleteMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
