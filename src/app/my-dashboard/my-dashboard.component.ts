import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppHealthService} from "../service/app-health.service";
import * as moment from "moment";
import {Giornaliero} from "../entities/giornaliero";
import {Settimanale} from "../entities/settimanale";
import {Mensile} from "../entities/mensile";

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
  giorno!: any;
  statGiornaliere !: Giornaliero;
  statSettimanali!: Settimanale;
  statMensili!: Mensile

  constructor(private appHealthService: AppHealthService, private router: Router) {
    this.tipo = "giorno";
    this.pieHidden = true;
    this.lineHidden = false;
  }

  ngOnInit(): void {
    this.giorno = moment().format("yyyy-MM-DD")
    this.getDataByGiorno(this.giorno);
    console.log(this.data)
    console.log("DIO PORCONE")
  }

  changePeriodType(tipo: string): void {
    this.tipo = tipo;
  }

  inverti() {
    this.lineHidden = this.pieHidden;
    this.pieHidden = !this.pieHidden;
  }

  getDataByGiorno(giorno: any): void {
    this.appHealthService.getStatisticheGiornaliereByGiorno(giorno).subscribe(data => {
        this.data = data
        console.log(this.data)
        console.log(this.data[2])
      }
    );
  }
}
