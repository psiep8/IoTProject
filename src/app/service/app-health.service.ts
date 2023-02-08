import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Settimanale} from "../entities/settimanale";
import {Mensile} from "../entities/mensile";

@Injectable({
  providedIn: 'root'
})
export class AppHealthService {

  private url = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) {

  }

  /*
    postDataArduino(postData: any): Observable<Object> {
      return this.httpClient.post((this.url + "/data-connection"), {
        body: {
          postData: postData
        }
      })
    }
  */
  getStatisticheSettimanaliAndSave(): Observable<Settimanale[]> {
    return this.httpClient.get<Settimanale[]>(this.url + "/statistiche-settimanali");
  }

  getStatisticheMensiliAndSave(): Observable<Mensile[]> {
    return this.httpClient.get<Mensile[]>(this.url + "/statistiche-mensili");

  }

}
