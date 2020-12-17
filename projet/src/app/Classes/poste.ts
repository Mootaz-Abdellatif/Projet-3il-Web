import {Materiel} from './materiel';

export class Poste{
id_Poste: bigint;
adresse_IP: String;
adresse_Mac: String;
// @ts-ignore
materiels: Materiel[];
etat: number;

}
