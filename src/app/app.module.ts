import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthentificationService } from './services/authentification.service';
import { SecureComponent } from './pages/secure/secure.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { TodoFormComponent } from './pages/todo/todo-form/todo-form.component';
import { SelectUserComponent } from './pages/todo/select-user/select-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SecureComponent,
    TodoListComponent,
    TodoFormComponent,
    SelectUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
