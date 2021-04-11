import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: ListProfileComponent },
  { path: 'update/:id', component: UpdateProfileComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
