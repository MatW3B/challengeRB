import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { customerIF } from 'src/app/datamodel/users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  readonly API_URL = 'https://620e9760ec8b2ee28326ae84.mockapi.io/api/1/users';
  title = 'challenge-rb';
  public clientData: customerIF[] = [];
  public selectedCustomer: customerIF | undefined;
  public contractFilterValue: any;
  private getCustomersSub = this.http.get<customerIF[]>(this.API_URL);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCustomersSub.subscribe({
      next: (v) => {
        this.clientData = v;
      }
    });
  }

  onRowSelect($event: any) {
    console.log($event);
  }

  deleteClient(client: customerIF) {
    this.clientData = this.clientData.filter(cli => cli.id !== client.id);
  }

}
