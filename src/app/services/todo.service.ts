import { LocalStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AuthentificationService } from './authentification.service';
import { NotificationService } from './notification.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  readonly url = 'http://localhost:3000/tasks'

  taskList: Observable<Todo[]> = new Observable<Todo[]>();

  search: string = '';

  constructor(private storage: LocalStorageService,
              private security: AuthentificationService,
              private notification: NotificationService,
              private http: HttpClient) {
    this.loadFromApi(this.url);
  }

  loadFromApi(url: string): void {
    this.taskList = this.http.get(url)
    .pipe(
      map( (response: any) => this.todoMap(response))
    )
  }

  todoMap(response: any): Todo[] {
    return response.map( (item: any) => {
      return new Todo(item);
    });
  }

  getNewTodo(): Todo {
    return new Todo();
  }

  saveTask(data: Todo ): void {
    if (!data.id) {
      this.http.post(this.url, data).subscribe((data) => {
        this.loadFromApi(this.url)
      } );
    }else {
      this.http.put(this.url + '/' + data.id, data).subscribe(
        () => {
          this.loadFromApi(this.url);
        }
      )
    }
  }

  deleteTask(id: number | undefined): void {
    const url = this.url + '/' + id;

    if (id == undefined) {
      return ;
    }
   this.getOneById(id).subscribe( 
     (task) => {
       if (task.user == this.security.user.login) {
         this.loadFromApi(this.url)
       }else {
        this.notification.setMessage("Vous n'avez pas les droits pour supprimer cette tâche")
       }
     })

    this.http.delete(url).subscribe(
      () => {
        this.loadFromApi(this.url)
      }
    ) 
  }

  getOneById(id: number): Observable<Todo>{
    return this.http.get<Todo>(this.url + '/' + id);
  }

  filterTask(): void {
    let url = this.url;
    
    if (this.search) {
      url += '?user=' + this.search 
    }
    this.loadFromApi(url);
  }
}