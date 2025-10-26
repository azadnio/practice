import { Component, effect, inject, viewChild } from '@angular/core';
import { MatButtonToggleGroup, MatButtonToggle, MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatList, MatListItem } from '@angular/material/list';
import { MatCheckbox } from '@angular/material/checkbox';
import { TodoItem, ToDoStore } from './store/todo.store';
import { MatSpinner } from '@angular/material/progress-spinner';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-to-do',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    MatFormField,
    MatInput,
    MatIcon,
    MatLabel,
    MatList,
    MatListItem,
    MatCheckbox,
    MatSpinner,
    NgStyle
],
  templateUrl: './to-do.html',
  styleUrl: './to-do.scss',
})
export default class ToDo {

  protected readonly filter = viewChild.required(MatButtonToggleGroup);
  store = inject(ToDoStore);

  constructor() {
    effect(() => {
      this.filter().value = this.store.filter();
    });
  }

  delete(item: TodoItem, event: MouseEvent) {
    event.stopPropagation();
    this.store.removeTodo(item);
  }

  toggle(item: TodoItem) {
    this.store.toggleCompletion(item);
  }

  toggleFilter(event: MatButtonToggleChange) {
    this.store.updateFilter(event.value);
  }

  async addTodo(input: HTMLInputElement) {
    if (input.value.trim()) {
      await this.store.addTodo(input.value.trim());
      input.value = ''; // Clear input after adding
    }
  }
}
