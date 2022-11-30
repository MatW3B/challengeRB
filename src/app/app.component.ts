import { Component, OnInit } from '@angular/core';
import { customerIF } from 'src/app/datamodel/users';
import { FetchService } from './services/fetch.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'challenge-rb';
  public clientData: customerIF[] = [];
  public selectedCustomer: customerIF | undefined;
  public contractFilterValue: any;

  constructor(private fetchSvc: FetchService) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.fetchSvc.fetchCustomers().subscribe({
      next: (customers) => {
        this.clientData = customers;
      }
    })
  }

  onRowSelect($event: any) {
    console.log($event);
  }

  deleteClient(client: customerIF) {
    this.clientData = this.clientData.filter(cli => cli.id !== client.id);
  }

}
