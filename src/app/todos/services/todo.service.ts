import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private storageKey = 'todos';
  private todosSubject: BehaviorSubject<string[]>;

  constructor() {
    const storedTodos = this.getTodosFromLocalStorage();
    this.todosSubject = new BehaviorSubject<string[]>(storedTodos);
  }

  private getTodosFromLocalStorage(): string[] {
    const todos = localStorage.getItem(this.storageKey);
    return todos ? JSON.parse(todos) : [];
  }

  getTodos(): Observable<string[]> {
    return this.todosSubject.asObservable();
  }

  addTodo(todo: string): void {
    const todos = this.todosSubject.getValue();
    todos.push(todo);
    this.updateLocalStorage(todos);
    this.todosSubject.next(todos);
  }

  removeTodo(index: number): void {
    const todos = this.todosSubject.getValue();
    todos.splice(index, 1);
    this.updateLocalStorage(todos);
    this.todosSubject.next(todos);
  }

  clearTodos(): void {
    this.updateLocalStorage([]);
    this.todosSubject.next([]);
  }

  private updateLocalStorage(todos: string[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }
}
