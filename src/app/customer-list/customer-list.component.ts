import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { CustomerDeleteComponent } from '../customer-delete/customer-delete.component';
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

  openEditDialog(customerInfo: CustomerInfo) {
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

  openDeleteDialog(customerInfo: CustomerInfo) {
    const dialogRef = this.dialog.open(CustomerDeleteComponent, {
      width: '50%',
      data: customerInfo,
    });

    dialogRef.afterClosed().subscribe((costumerData) => {
      if (costumerData) {
        const id = costumerData.id;
        this.apiService.deleteCustomer(id).then(() => this.ngOnInit());
      }
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(CustomerAddComponent, {
      width: '75%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(() => this.ngOnInit());

    //pipe(() => this.ngOnInit());
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
