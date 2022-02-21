import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  BarController,
  CategoryScale,
  BarElement,
} from 'chart.js';

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
      this.renderReportChart();
    });
  }

  renderReportChart() {
    Chart.register(
      LineController,
      LineElement,
      PointElement,
      LinearScale,
      Title,
      BarController,
      CategoryScale,
      BarElement
    );

    const customerNames = this.dataSource.map((c) => c.name);
    const employeeCounts = this.dataSource.map((c) => c.employeeCount);

    new Chart('reportChart', {
      type: 'bar',
      data: {
        labels: customerNames,
        datasets: [
          {
            label: '# of Votes',
            //data: [12, 19, 3, 5, 2, 3],
            data: employeeCounts,
            backgroundColor: [
              this.getFillColor(this.dataSource[0]),
              this.getFillColor(this.dataSource[1]),
              this.getFillColor(this.dataSource[2]),
              this.getFillColor(this.dataSource[3]),
            ],
            borderColor: [
              this.getBorderColor(this.dataSource[0]),
              this.getBorderColor(this.dataSource[1]),
              this.getBorderColor(this.dataSource[2]),
              this.getBorderColor(this.dataSource[3]),
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  getFillColor(customer: CustomerInfo) {
    const RED_COLOR_FILL = 'rgba(255, 99, 132, 0.3)';
    const GREEN_COLOR_FILL = 'rgba(75, 192, 192, 0.3)';
    return customer.rainStatus ? GREEN_COLOR_FILL : RED_COLOR_FILL;
  }

  getBorderColor(customer: CustomerInfo) {
    const RED_COLOR_BORDER = 'rgba(255, 99, 132, 0.5)';
    const GREEN_COLOR_BORDER = 'rgba(75, 192, 192, 0.5)';
    return customer.rainStatus ? GREEN_COLOR_BORDER : RED_COLOR_BORDER;
  }
}

export interface CustomerInfo {
  name: string;
  contact: string;
  phone: string;
  rainStatus: boolean;
  employeeCount: number;
}
