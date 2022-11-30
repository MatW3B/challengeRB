import { Component, Input, OnInit } from '@angular/core';
import { usersResponse } from 'src/app/datamodel/users';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.less']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: usersResponse | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
