import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Settimanale} from "../entities/settimanale";
import {Mensile} from "../entities/mensile";
import {Giornaliero} from "../entities/giornaliero";
import {convertToParamMap} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppHealthService {

  private url = "http://localhost:8080";

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

  getStatisticheGiornaliere(): Observable<Giornaliero[]> {
    return this.httpClient.get<Giornaliero[]>(this.url + "/statistiche-giornaliere");
  }

  getStatisticheSettimanali(): Observable<Settimanale[]> {
    return this.httpClient.get<Settimanale[]>(this.url + "/statistiche-settimanali");
  }

  getStatisticheMensili(): Observable<Mensile[]> {
    return this.httpClient.get<Mensile[]>(this.url + "/statistiche-mensili");
  }

  getStatisticheGiornaliereByGiorno(giorno: any): Observable<Giornaliero[]> {
    return this.httpClient.get<Giornaliero[]>((this.url + "/statistiche-giornaliere-date-prova"), {
      params: {
        giorno: giorno
      }
    });
  }

  getStatisticaSettimanaleByGiorno(giorno: any): Observable<Settimanale> {
    return this.httpClient.get<Settimanale>((this.url + "/statistica-settimanale-date"), {
      params: {
        giorno: giorno
      }
    });
  }

  getStatisticaMensileByMese(mese: any): Observable<Mensile> {
    return this.httpClient.get<Mensile>((this.url + "/statistica-mensile-date"), {
      params: {
        mese: mese
      }
    });
  }

  getSettimanaCount(): Observable<Settimanale> {
    return this.httpClient.get<Settimanale>(this.url + "/stat-settimanale");
  }

  getMeseCount(): Observable<Mensile> {
    return this.httpClient.get<Mensile>(this.url + "/stat-mensile");
  }

  saveStatisticheSettimanali(statisticheSettimanali: Settimanale): Observable<Object> {
    return this.httpClient.post((this.url + "/save-statistiche-settimanali"), {
      statisticheSettimanali: statisticheSettimanali
    });
  }

  saveStatisticheMensili(statisticheMensili: Mensile): Observable<Object> {
    return this.httpClient.post((this.url + "/save-statistiche-mensili"), {
      statisticheMensili: statisticheMensili
    });
  }

}
