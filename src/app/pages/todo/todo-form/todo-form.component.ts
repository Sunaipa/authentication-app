import { Router } from '@angular/router';
import { TodoService } from '../../../services/todo.service';
import { Todo, } from '../../../models/todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  task: Todo;

  constructor(private taskService: TodoService,
              private router: Router) {
    this.task = this.taskService.getNewTodo();
  }

  ngOnInit(): void {
    
}

  validateForm() {
    this.taskService.addTask(this.task);
    this.router.navigate(['/todo-list'])
  }
}
