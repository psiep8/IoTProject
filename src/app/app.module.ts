import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { MyChartComponent } from './my-chart/my-chart.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import { MyLoginComponent } from './my-login/my-login.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyChartTestComponent } from './my-chart-test/my-chart-test.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
    MyLoginComponent,
    MyChartTestComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    RouterOutlet,
    BrowserAnimationsModule,
    NgxChartsModule,
    RouterModule.forRoot([
      {path: '', component: MyLoginComponent},
      {path: 'login', component: MyLoginComponent},
      {path: 'chart', component: MyChartComponent},
      {path: 'chart2', component: MyChartTestComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
