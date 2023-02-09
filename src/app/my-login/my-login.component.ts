import { Component, OnInit } from '@angular/core';
import * as moment from "moment/moment";

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(moment().format("MM/yyy/DD"))
  }

}
