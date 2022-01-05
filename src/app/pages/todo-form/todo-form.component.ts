import { Router } from '@angular/router';
import { TodoListComponent } from './../todo-list/todo-list.component';
import { TodoService } from './../../services/todo.service';
import { TodoDataInterface } from './../../models/Todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  userInput: TodoDataInterface = {
    titre:'',
    detail: ''
  };

  constructor(private todoListService: TodoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  validateForm(): void {
    this.todoListService.addTodo(this.userInput)
    this.router.navigate(['/todoList'])
  }

}
