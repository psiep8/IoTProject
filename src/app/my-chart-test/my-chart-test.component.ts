import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {LegendPosition} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-my-chart-test',
  templateUrl: './my-chart-test.component.html',
  styleUrls: ['./my-chart-test.component.css']
})
export class MyChartTestComponent {
  single= [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    }
  ]


  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;


  constructor() {
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
