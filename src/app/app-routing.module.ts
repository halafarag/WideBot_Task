import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'todo', component: TodoListComponent },
      { path: 'user', component: UserListComponent },
      { path: 'user/:id', component: UserDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
