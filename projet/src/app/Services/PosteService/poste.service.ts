// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
// @ts-ignore
import {Observable} from 'rxjs';
import {Poste} from '../../Classes/poste';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class PosteService {


  private baseURL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public getPostes(id_Salle: number): Observable<Poste[]> {
    return this.httpClient.get<Poste[]>(`${this.baseURL}/poste/retrieve-postes-by-salle/${id_Salle}`);
  }

  public startPoste(id_Poste: number){

    let params = new  HttpParams()
      .set("Id_Poste",String(id_Poste));

    console.log(id_Poste);

    return this.httpClient.post(`${this.baseURL}/wol/wakeOnLanPosteShell`,params);
  }

  public startAllPostes(id_Salle: number){
    let params = new  HttpParams()
      .set("Id_Salle",String(id_Salle));

    console.log(id_Salle);

    return this.httpClient.post(`${this.baseURL}/wol/wakeOnLanSalle`,params);
  }

  testSalle(id_Salle: number) {

    let params = new HttpParams()
      .set("Id_Salle",String(id_Salle));

    console.log(this.httpClient.post(`${this.baseURL}/wmi/testSalle`,params));
    return this.httpClient.post(`${this.baseURL}/wmi/testSalle`,params);

  }

}
