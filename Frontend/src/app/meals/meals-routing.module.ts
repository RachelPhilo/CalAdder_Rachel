import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMealsComponent } from './add-meals/add-meals.component';
import { DeleteMealsComponent } from './delete-meals/delete-meals.component';
import { ListMealsComponent } from './list-meals/list-meals.component';
import { MealsComponent } from './meals.component';
import { SearchMealsComponent } from './search-meals/search-meals.component';
import { UpdateMealsComponent } from './update-meals/update-meals.component';

const routes: Routes = [{ path: '', component:  ListMealsComponent},
                        { path:'add',component: AddMealsComponent},
                        { path:'update/:id',component: UpdateMealsComponent},
                        { path:'delete/:id',component: DeleteMealsComponent},
                        { path:'search',component: SearchMealsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsRoutingModule { }
