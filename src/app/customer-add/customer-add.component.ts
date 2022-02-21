import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { CustomerInfo } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
})
export class CustomerAddComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<CustomerAddComponent>,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  cancelAdd() {
    this.dialogRef.close();
  }

  async addCustomer(data: NgForm) {
    const customerData = {
      name: data.value.name,
      contact: data.value.contact,
      phone: data.value.phone,
      location: {
        country: data.value.country,
        city: data.value.city,
        state: data.value.state,
      },
      employeeCount: data.value.employeeCount,
    };
    if (customerData.name != '') {
      await this.apiService.addCustomer(customerData);
    }

    this.dialogRef.close();
  }
}
