import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppHealthService} from "../service/app-health.service";
import * as moment from "moment";
import {Giornaliero} from "../entities/giornaliero";
import {Settimanale} from "../entities/settimanale";
import {Mensile} from "../entities/mensile";
import * as Console from "console";

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
    this.getDataByGiorno("2023-02-08");
    //console.log(this.data)
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
        this.data = this.formatList(data);
        //this.data = data;
        console.log(data);

        console.log("format:");
        console.log(this.data)
      }
    );
  }
  formatList(list: Giornaliero[]): any[] {
    let sums = [0,0,0,0,0,0];
    list.forEach(value => {sums[0]+= (value.attivoGiornaliero as number);
    sums[1]+= (value.inattivoGiornaliero as number);
      sums[2]+= (value.numPauseBreviGiornaliero as number);
      sums[3]+= (value.numPauseRiposoGiornaliero as number);
      sums[4]+= (value.troppoLontanoGiornaliero as number);
      sums[5]+= (value.troppoVicinoGiornaliero as number)}
    );
    console.log(sums);
    return [
      {
      "name": "Attivo giornaliero",
      "value": sums[0]
    },
    {
      "name": "Inattivo giornaliero",
      "value": sums[1]
    },
    {
      "name": "Numero pause brevi",
      "value": sums[2]
    },
    {
      "name": "Numero pause riposo",
      "value": sums[3]
    },
      {
        "name": "Troppo lontano",
        "value": sums[4]
      },
      {
        "name": "Troppo vicino",
        "value": sums[5]
      }
    ]

  }
}
