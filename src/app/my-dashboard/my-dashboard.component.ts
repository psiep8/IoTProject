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
  reactiveForm!: FormGroup;
  dateGiorno!: any;
  dateSettimana!: any;
  months: string[] = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  monthForm!: FormGroup;
  giornoPost!: string;
  month!: string;

  constructor(private appHealthService: AppHealthService, private router: Router) {
    this.tipo = "";
    this.pieHidden = true;
    this.lineHidden = false;
  }

  ngOnInit(): void {
    this.giornoPost = moment().format("dddd")
    this.monthForm = new FormGroup({
      months: new FormControl()
    });

    this.reactiveForm = new FormGroup({
      dateGiorno: new FormControl(),
      dateSettimana: new FormControl(),
    });

    this.getDataByGiornoVista(moment(Date.now() - 1 * 24 * 3600 * 1000).format('yyyy-MM-DD'))
    this.getSettimanaByGiornoVista(moment(Date.now() - 1 * 24 * 3600 * 1000).format('yyyy-MM-DD'))
    this.getMeseByVista(this.months[0])

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
      }
    );
  }

  getSettimanaByGiornoVista(giorno: any): void {
    this.appHealthService.getStatisticheSettimanaByGiornoVista(giorno).subscribe(data => {
        this.data = data;
      }
    );
  }

  getMeseByVista(mese: any): void {
    this.appHealthService.getStatisticaMensileByMeseVista(mese).subscribe(data => {
        this.data = data;
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
    this.getSettimanaByGiornoVista(localStorage.getItem("dateSettimana"));
    localStorage.removeItem("dateSettimana");
  }

  getDataMese() {
    localStorage.setItem("month", this.month)
    this.getMeseByVista(localStorage.getItem("month"));
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

  submitMese() {
    this.getDataMese();
    let mese = localStorage.getItem("month")
    this.appHealthService.getStatisticaMensileByMese(mese).subscribe(data => {
      this.data = data;
      this.appHealthService.saveStatisticheMensili(data).subscribe(res => {
        }
      );
      this.router.navigateByUrl('dashboard');
    })
  }

}
