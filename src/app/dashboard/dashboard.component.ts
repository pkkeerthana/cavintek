import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as Highcharts from 'highcharts';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  spinner_value = 50;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: null
  },
    xAxis: {
      title: {
        text: null
      },
      labels: { enabled: false, y: 20, align: 'right' }
    },
    yAxis: {
      gridLineColor: 'transparent',
      title: {
        text: null
      },
      labels: { enabled: true}

    },
    legend: {
      enabled: false
    },
    series: [{
      data: [1, 5, 3,6,2,5],
      type: 'areaspline',
      fillColor:'rgba(210, 210, 247, 0.61)'
    },
    {
      data: [2, 4, 1,3,2,1],
      type: 'areaspline',
      fillColor:'rgba(210, 210, 247, 0.91)'
    }]
  };
  firstRow = [
    'netsales',
    'ticket',
    'gross_sales'
  ];
  secondRow = [
    'recent_sales',
    'event_goals',
    'email_campaign'
  ];
  value_slider: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  drop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.firstRow, event.previousIndex, event.currentIndex);
  }

  drop2(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.secondRow, event.previousIndex, event.currentIndex)
  }

}
