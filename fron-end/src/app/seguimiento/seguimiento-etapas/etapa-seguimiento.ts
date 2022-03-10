import { EtapaPersonaDTO } from './etapa-persona-dto';
import { Persona } from './../../persona/persona';
export interface EtapaSeguimiento {
  etapaPersonaId:number;
  etapaId: number;
  nombreEtapa: string;
  etapaPersonaDTO: EtapaPersonaDTO[];
}
