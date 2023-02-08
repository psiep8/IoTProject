import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  tipo: string;
  pieHidden: boolean;
  lineHidden: boolean;

  constructor() {
    this.tipo = "giorno";
    this.pieHidden=true;
    this.lineHidden=false;

  }

  ngOnInit(): void {
  }

  changePeriodType(tipo: string): void {
    this.tipo = tipo;
  }

  inverti() {
    this.lineHidden = this.pieHidden;
    this.pieHidden = !this.pieHidden;
  }
}
