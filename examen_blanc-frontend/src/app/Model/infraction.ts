import {Vehicule} from "./vehicule";
import {Radar} from "./radar";

export interface Infraction {
  id: number;
  date: string;
  montant: number;
  vehiculeId: string;
  vehicule: Vehicule;
  radarId:string;
  radar:Radar;
}
