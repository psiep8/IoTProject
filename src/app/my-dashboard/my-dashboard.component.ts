import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppHealthService} from "../service/app-health.service";
import * as moment from "moment";

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  data!: any;
  tipo: string;
  pieHidden: boolean;
  lineHidden: boolean;

  constructor(private appHealthService: AppHealthService, private router: Router) {
    this.tipo = "giorno";
    this.pieHidden=true;
    this.lineHidden=false;

  }

  ngOnInit(): void {
    this.getDataByGiorno(moment());
    console.log("DIO PORCONE")
  }

  changePeriodType(tipo: string): void {
    this.tipo = tipo;
  }

  inverti() {
    this.lineHidden = this.pieHidden;
    this.pieHidden = !this.pieHidden;
  }

  getDataByGiorno(giorno: moment.Moment): void {
    this.appHealthService.getStatisticheGiornaliereByGiorno(giorno.format("yyyy/MM/DD")).subscribe(data => this.data = data);
  }
}
