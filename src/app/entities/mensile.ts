import * as moment from "moment/moment";

export interface Mensile {
  idMensile: number;
  attivoMensile: number;
  inattivoMensile: number;
  numPauseBreviMensile: number;
  numPauseRiposoMensile: number;
  troppoLontanoMensile: number;
  troppoVicinoMensile: number;
  mese: string;

}
