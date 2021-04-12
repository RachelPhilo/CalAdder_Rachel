import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealsRoutingModule } from './meals-routing.module';
import { MealsComponent } from './meals.component';
import { ListMealsComponent } from './list-meals/list-meals.component';
import { DeleteMealsComponent } from './delete-meals/delete-meals.component';
import { UpdateMealsComponent } from './update-meals/update-meals.component';
import { AddMealsComponent } from './add-meals/add-meals.component';
import { SearchMealsComponent } from './search-meals/search-meals.component';
// import { UserHistoryComponent } from './user-history/user-history.component';


@NgModule({
  declarations: [MealsComponent, ListMealsComponent, DeleteMealsComponent, UpdateMealsComponent, AddMealsComponent, SearchMealsComponent],
  imports: [
    CommonModule,
    MealsRoutingModule
  ]
})
export class MealsModule { }
