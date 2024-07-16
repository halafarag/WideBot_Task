import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo!: string;
  @Input() index!: number;
  @Output() remove = new EventEmitter<number>();

  onRemove(): void {
    this.remove.emit(this.index);
  }
}
