import { Injectable } from '@angular/core';
import axios from 'axios';

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
}
