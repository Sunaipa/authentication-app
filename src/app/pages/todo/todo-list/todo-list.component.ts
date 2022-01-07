import { AuthentificationService } from './../../../services/authentification.service';
import { TodoService } from '../../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public taskService: TodoService,
              private security: AuthentificationService,
              private router: Router,
              private notification: NotificationService) {
    
  }

  ngOnInit(): void {

  }

  editTask(task: Todo): void {
    if (task.user === this.security.user.login) {
      this.router.navigate(['/todo-form', task.id])
    } else {
      this.notification.setMessage("Vous ne pouvez pas modifier cette tâche !")
    }
  }

}
