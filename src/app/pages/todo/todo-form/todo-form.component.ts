import { AuthentificationService } from './../../../services/authentification.service';
import { Router, ActivatedRoute } from '@angular/router';
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
              private router: Router,
              private currentRoute: ActivatedRoute,
              public security: AuthentificationService) {
    this.task = this.taskService.getNewTodo();
    currentRoute.params.subscribe(params => {
      const id = params['id'];
      this.task = this.taskService.getOneById(id);
    })
  }

  ngOnInit(): void {
    
}

  validateForm() {
    this.taskService.saveTask(this.task);
    this.router.navigate(['/todo-list'])
  }
}
