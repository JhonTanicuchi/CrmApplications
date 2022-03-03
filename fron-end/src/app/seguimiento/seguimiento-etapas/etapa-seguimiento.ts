import { Persona } from './../../persona/persona';
export interface EtapaSeguimiento {
  etapaId: number;
  nombreEtapa: string;
  persona: Persona[];
}
