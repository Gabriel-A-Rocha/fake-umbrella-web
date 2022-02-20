import { Injectable } from '@angular/core';
import axios from 'axios';
import { CustomerInfo } from './customer-list/customer-list.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  async fetchReportInfo(): Promise<any> {
    const url = 'http://localhost:3000/report';

    const response = await axios.get(url);
    return response;
  }

  async fetchCustomersInfo(): Promise<any> {
    const url = 'http://localhost:3000/customers';

    const response = await axios.get(url);
    return response;
  }

  async updateCustomer(customerInfo: CustomerInfo) {
    const { id } = customerInfo;
    const url = `http://localhost:3000/customers/${id}`;
    const response = await axios.patch(url, customerInfo);
    return response;
  }

  async deleteCustomer(customerId: string) {
    const url = `http://localhost:3000/customers/${customerId}`;
    await axios.delete(url);
  }

  async addCustomer(customerData: Partial<CustomerInfo>) {
    const url = 'http://localhost:3000/customers';
    await axios.post(url, customerData);
  }
}
