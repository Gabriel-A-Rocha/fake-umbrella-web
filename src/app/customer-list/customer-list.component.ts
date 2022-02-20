import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';

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

  constructor(private dialog: MatDialog, private apiService: ApiService) {}

  async ngOnInit() {
    this.apiService.fetchCustomersInfo().then((response) => {
      this.dataSource = response.data;
    });
  }

  openDialog(customerInfo: CustomerInfo) {
    const dialogRef = this.dialog.open(CustomerEditComponent, {
      width: '75%',
      data: customerInfo,
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        const employeeCount = Number(formData.employeeCount);
        this.apiService.updateCustomer({ ...formData, employeeCount });
      }
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
