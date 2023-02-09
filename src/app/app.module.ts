import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {AppComponent} from './app.component';
import {MyChartComponent} from './my-chart/my-chart.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {MyLoginComponent} from './my-login/my-login.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyChartTestComponent} from './my-chart-test/my-chart-test.component';
import {MyDashboardComponent} from './my-dashboard/my-dashboard.component';
import {HttpClientModule} from '@angular/common/http';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
    MyLoginComponent,
    MyChartTestComponent,
    MyDashboardComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    RouterOutlet,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MyLoginComponent},
      {path: 'login', component: MyLoginComponent},
      {path: 'chart', component: MyChartComponent},
      {path: 'chart2', component: MyChartTestComponent},
      {path: 'dashboard', component: MyDashboardComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
