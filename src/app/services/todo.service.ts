import { Injectable } from '@angular/core';
import { Todo, TodoDataInterface } from '../models/Todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo: TodoDataInterface;

  todoList: TodoDataInterface[] = [
    {titre: 'Sortir le chien', detail: 'ce soir 05/01/2022'},
    {titre: 'Commander sur amazon', detail: 'Cadeaux anniv'},
    {titre: 'etetetet', detail: 'ryryryryry'},
    {titre: 'dfdfdfdfdf', detail: 'ghghghghgh'}
  ]

  constructor() {
    this.todo = new Todo();
   }

   addTodo(todo: TodoDataInterface) {
    this.todoList.push(todo);
   }
}
