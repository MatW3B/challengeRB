import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  readonly API_URL = 'https://620e9760ec8b2ee28326ae84.mockapi.io/api/1/users';
  title = 'challenge-rb';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.API_URL).subscribe({
      next: (v) => {
        // do sth with value
      }
    });
  }

}
