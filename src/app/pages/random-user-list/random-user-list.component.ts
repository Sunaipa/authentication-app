import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.component.html',
  styleUrls: ['./random-user-list.component.css']
})
export class RandomUserListComponent implements OnInit {

  readonly url = 'https://randomuser.me/api?results=10';
 

  constructor(  private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(response => {
      console.log(response);
    })
  }

}
