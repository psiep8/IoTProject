import * as moment from "moment/moment";

export interface Giornaliero {
  idGiornaliero: number;
  attivoGiornaliero: number;
  inattivoGiornaliero: number;
  numeroPauseBreviGiornaliere: number;
  numeroPauseRiposoGiornaliere: number;
  troppoLontanoGiornaliero: number;
  troppoVicinoGiornaliero: number;
  ora: number;
  giorno: moment.Moment;

}
