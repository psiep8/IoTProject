import * as moment from "moment/moment";

export interface Settimanale {
  idSettimanale: number;
  attivoSettimanale: number;
  inattivoSettimanale: number;
  numPauseBreviSettimanale: number;
  numPauseRiposoSettimanale: number;
  troppoLontanoSettimanale: number;
  troppoVicinoSettimanale: number;
  dataInizio: moment.Moment;
  dataFine: moment.Moment;

}
