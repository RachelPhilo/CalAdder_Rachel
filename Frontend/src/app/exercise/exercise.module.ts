import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';
import { ExerciseComponent } from './exercise.component';
import { ListExerciseComponent } from './list-exercise/list-exercise.component';
import { DeleteExerciseComponent } from './delete-exercise/delete-exercise.component';
import { UpdateExerciseComponent } from './update-exercise/update-exercise.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { SearchExerciseComponent } from './search-exercise/search-exercise.component';


@NgModule({
  declarations: [ExerciseComponent, ListExerciseComponent, DeleteExerciseComponent, UpdateExerciseComponent, AddExerciseComponent, SearchExerciseComponent],
  imports: [
    CommonModule,
    ExerciseRoutingModule
  ]
})
export class ExerciseModule { }
