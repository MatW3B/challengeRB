import { Component, Input } from '@angular/core';
import { customerIF } from 'src/app/datamodel/users';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.less']
})
export class CustomerDetailsComponent {
  @Input() customer: customerIF | undefined;

}
