import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { NewUserComponent } from './authentication/new-user/new-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'logout',component:LogoutComponent},
{path:'register',component:NewUserComponent},
{path:'dashboard',component:DashboardComponent},

{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }, 
{ path: 'meals', loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule) }, 
{ path: 'exercise', loadChildren: () => import('./exercise/exercise.module').then(m => m.ExerciseModule) },

{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
