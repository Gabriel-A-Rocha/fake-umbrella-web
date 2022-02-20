import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { CustomerInfo } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
})
export class CustomerEditComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private dialogRef: MatDialogRef<CustomerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerInfo
  ) {}

  ngOnInit(): void {}

  cancelUpdate() {
    this.dialogRef.close();
  }
}
