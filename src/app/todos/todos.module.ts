import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [TodoListComponent, ConfirmDialogComponent, TodoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, SharedModule],
  exports: [TodoListComponent, ConfirmDialogComponent],
})
export class TodosModule {}
