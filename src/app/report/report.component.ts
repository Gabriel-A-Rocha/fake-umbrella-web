import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = ['name', 'contact', 'phone'];
  dataSource: CustomerInfo[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    this.apiService.fetchReportInfo().then((response) => {
      this.dataSource = response.data;
      this.dataSource = this.dataSource.filter((c) => c.rainStatus === true);
    });
  }
}

export interface CustomerInfo {
  name: string;
  contact: string;
  phone: string;
  rainStatus: boolean;
}
