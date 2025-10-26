import { Injectable } from '@angular/core';
import { TodoItem } from '../store/todo.store';

@Injectable({
  providedIn: 'root'
})
export class Service {

  async getMockData(): Promise<TodoItem[]> {
    await sleep(1000);
    
    return MOCKDATA;
  }

  async addTodo(item: TodoItem): Promise<TodoItem> {
    await sleep(500);
    return {
      ...item, id: (Math.random() * 10000).toFixed(0)
    };
  }

  async removeTodo(item: TodoItem): Promise<void> {
    await sleep(500);
    const index = MOCKDATA.findIndex(i => i.id === item.id);
    if (index > -1) {
      MOCKDATA.splice(index, 1);
    }
  }

  async updateTodo(item: TodoItem, isCompleted: boolean){
    await sleep(500);
    // return { ...item, completed: isCompleted };
    // const index = MOCKDATA.findIndex(i => i.id === item.id);
    // if (index > -1) {
    //   MOCKDATA[index] = { ...item, completed: isCompleted };
    // }
    // return MOCKDATA[index];
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const MOCKDATA: TodoItem[] = [
  { id: '1', title: 'Buy groceries', completed: false },
  { id: '3', title: 'Read a book', completed: false },
  { id: '4', title: 'Write some code', completed: false },
  { id: '5', title: 'Exercise', completed: true },
  { id: '6', title: 'Call a friend', completed: false },
  { id: '7', title: 'Plan a trip', completed: true },
  { id: '8', title: 'Clean the house', completed: false },
  { id: '9', title: 'Pay bills', completed: true },
  { id: '10', title: 'Attend a meeting', completed: false }
];