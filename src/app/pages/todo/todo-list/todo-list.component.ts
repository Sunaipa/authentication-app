import { AuthentificationService } from './../../../services/authentification.service';
import { TodoService } from '../../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public taskService: TodoService) {
    
  }

  ngOnInit(): void {

  }

}
