import {Component, Input, OnInit} from '@angular/core';
import {AppHealthService} from "../service/app-health.service";
import * as moment from "moment/moment";

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  @Input() data!: any;
  giorno!: any;

  constructor(private appHealthService: AppHealthService) {
  }

  ngOnInit(): void {
    this.giorno = moment().format("yyyy-MM-DD")
    this.getDataByGiorno(this.giorno);
    console.log("DIO PORCONE")
  }


  getDataByGiorno(giorno: any): void {
    this.appHealthService.getStatisticheGiornaliereByGiorno(giorno).subscribe(data => {
        this.data = data
        console.log(this.data)
      }
    );
  }
}
