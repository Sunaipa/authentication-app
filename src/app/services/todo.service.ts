import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  taskList: Todo[] = [
    new Todo({taskName: 'Faire le ménage', done: false, id: 1}),
    new Todo({taskName: 'Apprendre le Polonais', done: false, id: 2}),
  ];

  constructor() {
    
   }

   getNewTodo(): Todo {
     return new Todo();
   }

   addTask(data: Todo): void {
    this.taskList.push(data);
   }

   deleteTask(id: number | undefined): void {
    const index = this.taskList.findIndex(item => item.id == id);
    this.taskList.splice(index, 1)
   }
   // Update
   updateTask(id: number | undefined ): void {
    const index = this.taskList.findIndex(item => item.id == id);
   }
}
