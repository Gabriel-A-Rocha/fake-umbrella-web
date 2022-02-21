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
  SubTitle,
} from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'contact',
    'phone',
    'employees',
    'location',
  ];
  dataSource: CustomerInfo[] = [];
  tableInfo: Partial<CustomerInfo[]> = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    this.apiService.fetchReportInfo().then((response) => {
      this.dataSource = response.data;
      this.renderReportChart();
      this.tableInfo = this.dataSource.filter((c) => c.rainStatus === true);
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
      BarElement,
      SubTitle
    );

    const customerNames = this.dataSource.map((c) => c.name);
    const employeeCounts = this.dataSource.map((c) => c.employeeCount);

    new Chart('reportChart', {
      type: 'bar',
      data: {
        labels: customerNames,
        datasets: [
          {
            label: 'Employee Count',
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
            barPercentage: 0.8,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Prospects Report',
            font: {
              size: 18,
            },
          },
          subtitle: {
            display: true,
            position: 'bottom',
            text: 'Green bars indicate rainy forecast in the next 5 days',
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              font: {
                size: 12,
              },
              color: 'rgb(255, 99, 132)',
            },
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

/* export interface CustomerInfo {
  name: string;
  contact: string;
  phone: string;
  rainStatus: boolean;
  employeeCount: number;
}
 */

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
  rainStatus: boolean;
}
