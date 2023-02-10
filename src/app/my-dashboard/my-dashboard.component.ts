import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppHealthService} from "../service/app-health.service";
import * as moment from "moment";
import {Giornaliero} from "../entities/giornaliero";
import {Settimanale} from "../entities/settimanale";
import {Mensile} from "../entities/mensile";
import * as Console from "console";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  reactiveForm!: FormGroup;
  dateGiorno!: any;
  dateSettimana!: any;
  months: string[] = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  monthForm!: FormGroup;
  giornoPost!: string;
  month!: string;
  statGiornaliere !: Giornaliero;
  statSettimanali!: Settimanale;
  statMensili!: Mensile

  constructor(private appHealthService: AppHealthService, private router: Router) {
    this.tipo = "";
    this.pieHidden = true;
    this.lineHidden = false;
  }

  ngOnInit(): void {
    this.giornoPost = moment().format("dddd")
    console.log(this.giornoPost)
    this.monthForm = new FormGroup({
      months: new FormControl()
    });

    this.reactiveForm = new FormGroup({
      dateGiorno: new FormControl(),
      dateSettimana: new FormControl(),
    });
    this.getDataByGiornoVista(moment(Date.now() - 1 * 24 * 3600 * 1000).format('yyyy-MM-DD'))

  }

  changePeriodType(tipo: string): void {
    this.tipo = tipo;
  }

  inverti() {
    this.lineHidden = this.pieHidden;
    this.pieHidden = !this.pieHidden;
  }

  getDataByGiornoVista(giorno: any): void {
    this.appHealthService.getStatisticheGiornaliereByGiornoVista(giorno).subscribe(data => {
        this.data = data;
        console.log(data);
        console.log("format:");
        console.log(this.data)
      }
    );
  }

  getDataByGiorno(giorno: any): void {
    this.appHealthService.getStatisticheGiornaliereByGiorno(giorno).subscribe(data => {
        this.data = data;
        console.log(data);
        console.log("format:");
        console.log(this.data)
      }
    );
  }

  getSettimanaByGiorno(giorno: any): void {
    this.appHealthService.getStatisticaSettimanaleByGiorno(giorno).subscribe(data => {
        this.data = data;
        console.log(data);
        console.log("format:");
        console.log(this.data)
      }
    );
  }

  getMese(mese: any): void {
    this.appHealthService.getStatisticaMensileByMese(mese).subscribe(data => {
        this.data = data;
        console.log(data);
        console.log("format:");
        console.log(this.data)
      }
    );
  }

  getDataGiorno() {
    localStorage.setItem("dateGiorno", this.reactiveForm.value.dateGiorno)
    this.getDataByGiornoVista(localStorage.getItem("dateGiorno"));
    localStorage.removeItem("dateGiorno");
  }

  getDataSettimana() {
    localStorage.setItem("dateSettimana", this.reactiveForm.value.dateSettimana)
    this.getSettimanaByGiorno(localStorage.getItem("dateSettimana"));
    localStorage.removeItem("dateSettimana");
  }

  getDataMese() {
    localStorage.setItem("month", this.month)
    this.getMese(localStorage.getItem("month"));
    localStorage.removeItem("month");
  }

  submitSettimana() {
    this.appHealthService.getStatisticaSettimanaleByGiorno(moment().format("yyyy-MM-DD")).subscribe(data => {
      this.data = data;
      this.appHealthService.saveStatisticheSettimanali(data).subscribe(res => {
        }
      );
      this.router.navigateByUrl('dashboard');
    })
  }

}
