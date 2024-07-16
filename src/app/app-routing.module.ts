import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';
import { MainComponent } from './shared/components/main/main.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'todo', component: TodoListComponent },
      { path: 'users', component: UserListComponent },
      { path: 'users/:id', component: UserDetailsComponent },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
