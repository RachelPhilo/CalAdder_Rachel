import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealsRoutingModule } from './meals-routing.module';
import { MealsComponent } from './meals.component';
import { UserHistoryComponent } from './user-history/user-history.component';


@NgModule({
  declarations: [MealsComponent, UserHistoryComponent],
  imports: [
    CommonModule,
    MealsRoutingModule
  ]
})
export class MealsModule { }
