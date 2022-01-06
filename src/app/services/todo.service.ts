import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  search: string = '';

  taskList: Todo[] = [
    new Todo({taskName: 'Faire le ménage', done: false, id: 1, user: 'ada'}),
    new Todo({taskName: 'Apprendre le Polonais', done: false, id: 2, user: 'Alan'}),
  ];

  constructor() {
    
   }

   getNewTodo(): Todo {
     return new Todo();
   }

   saveTask(data: Todo): void {
      const taskExist = this.taskList.find(item => item.id == data.id)
    if (! taskExist) {
      this.taskList.push(data);
    } 
   }

   deleteTask(id: number | undefined): void {
    const index = this.taskList.findIndex(item => item.id == id);
    this.taskList.splice(index, 1)
   }

   getOneById(id: number): Todo {
    const task =  this.taskList.find(item => item.id == id);
    return task || new Todo();
   }
}
