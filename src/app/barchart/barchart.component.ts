import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = []; 

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits', backgroundColor: 'rgb(115,151,115)', hoverBackgroundColor:'rgb(80,151,115)' },
    { data: [11, 50, 40, 55, 70, 30], label: 'Best Flowers', backgroundColor: 'rgb(115,0,11)', hoverBackgroundColor: 'rgb(80,0,11)'}
  ];




  constructor() { }

  ngOnInit() {
  }

}
