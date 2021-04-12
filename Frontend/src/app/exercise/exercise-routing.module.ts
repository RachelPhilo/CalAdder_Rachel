import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { DeleteExerciseComponent } from './delete-exercise/delete-exercise.component';
import { ExerciseComponent } from './exercise.component';
import { ListExerciseComponent } from './list-exercise/list-exercise.component';
import { SearchExerciseComponent } from './search-exercise/search-exercise.component';
import { UpdateExerciseComponent } from './update-exercise/update-exercise.component';

const routes: Routes = [{ path: '', component: ListExerciseComponent },
                        { path: 'add', component: AddExerciseComponent },
                        { path: 'update/:id', component: UpdateExerciseComponent },
                        { path: 'delete/:id', component: DeleteExerciseComponent },
                        { path: 'search', component: SearchExerciseComponent }
                        

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule { }
