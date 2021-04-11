import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';


@NgModule({
  declarations: [UsersComponent, ListProfileComponent, UpdateProfileComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
