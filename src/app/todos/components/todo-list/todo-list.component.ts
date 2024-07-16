import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<string[]>;
  newTodo: string = '';
  clearAllChecked: boolean = false;

  constructor(private todoService: TodoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  removeTodo(index: number): void {
    this.todoService.removeTodo(index);
  }

  clearTodos(): void {
    if (this.clearAllChecked) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent);

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.todoService.clearTodos();
        }
      });

      this.clearAllChecked = false;
    }
  }
}
