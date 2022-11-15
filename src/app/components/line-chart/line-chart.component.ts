import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.sass']
})
export class LineChartComponent implements OnInit {

  chartData: ChartDataset[] = [
    {
      label: '$ in millions',
      data: [ 1551, 1688, 1800, 1895, 2124, 2124 ],
      pointHitRadius: 15,
      pointHoverRadius: 8,
      pointRadius: 2,
      borderColor: '#2d2f33',
      pointBackgroundColor: '#2d2f33',
      pointHoverBackgroundColor: '#2d2f33',
      borderWidth: 2,
      hoverBorderWidth: 0,
      pointBorderWidth: 0,
      tension: 0.3,
    },
  ];
  chartLabels: string[] = ['2016 Revenue', '2017 Revenue', '2018 Revenue', '2019 Revenue', '2020 Revenue', '2021 Revenue', ];
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
          display: false,
          grid: {
            drawBorder: false
          }
      },
      yAxis: {
        display: false,
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#fff',
        displayColors: false,
        padding: 10,

        titleColor: '#2d2f33',
        titleFont: {
          size: 18
        },
        bodyColor: '#2d2f33',
        bodyFont: {
          size: 14
        },
      },
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
