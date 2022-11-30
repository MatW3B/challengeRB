import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { customerIF } from '../datamodel/users';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private readonly API_URL = 'https://620e9760ec8b2ee28326ae84.mockapi.io/api/1/users';

  constructor(private http: HttpClient) { }

  fetchCustomers(): Observable<customerIF[]> {
    return this.http.get<customerIF[]>(this.API_URL).pipe(
      map((customerArray: customerIF[]) => this.transformData(customerArray))
    )
  }

  transformData(customerData: customerIF[]): customerIF[] {
    customerData.map((customer) => {
      customer.birthDate = new Date(customer.birthDate);
    });
    return customerData;
  }

}
