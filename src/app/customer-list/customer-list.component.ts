import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'contact',
    'phone',
    'city',
    'state',
    'country',
    'employeeCount',
    'editButton',
  ];
  dataSource: CustomerInfo[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    this.apiService.fetchCustomersInfo().then((response) => {
      this.dataSource = response.data;
    });
  }
}

export interface CustomerInfo {
  id: string;
  name: string;
  contact: string;
  phone: string;
  location: {
    country: string;
    city: string;
    state: string;
  };
  employeeCount: number;
}
