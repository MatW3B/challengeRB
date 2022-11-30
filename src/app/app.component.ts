import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { usersResponse } from 'src/app/datamodel/users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  readonly API_URL = 'https://620e9760ec8b2ee28326ae84.mockapi.io/api/1/users';
  title = 'challenge-rb';
  public clientData: usersResponse[] = [];
  public selectedCustomer: usersResponse | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<usersResponse[]>(this.API_URL).subscribe({
      next: (v) => {
        this.clientData = v;
      }
    });
  }

  onRowSelect($event: any) {
    console.log($event);
  }

}
