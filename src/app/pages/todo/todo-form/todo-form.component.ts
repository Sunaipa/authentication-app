import { AuthentificationService } from './../../../services/authentification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../../../services/todo.service';
import { Todo, } from '../../../models/todo.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit, AfterViewInit {

  task: Todo;

  @ViewChild('taskForm') taskForm: NgForm|undefined;

  constructor(private taskService: TodoService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    public security: AuthentificationService) {
    this.task = this.taskService.getNewTodo();

    
  }
  ngAfterViewInit(): void {
    // hydratation du formulaire
    this.currentRoute.params.subscribe(params => {
      const id = params['id'];
      this.taskService.getOneById(id).subscribe(
        (task) => {
          this.task = task;
          setTimeout(() => {
            this.taskForm?.setValue(
              { taskName: this.task.taskName, done: this.task.done}  
            );
          }, 100);
        }
      );
    });
    
    
  }

  ngOnInit(): void { }
  
  validateForm(taskForm: NgForm) {
    console.log(taskForm);
    if (taskForm.form.valid) {
      this.task.taskName = taskForm.form.value.taskName;
      this.task.done = taskForm.form.value.done;
      this.task.user = this.security.user.login;

      this.taskService.saveTask(this.task);
      this.router.navigate(['/todo-list']);
    }
  }

}
