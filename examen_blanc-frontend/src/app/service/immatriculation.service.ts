import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
  }
};

@Injectable({
  providedIn: 'root'
})

export class ImmatriculationService {

  constructor(private http: HttpClient) {
  }

  public getProprietaires():any {
    return this.http.get(environment.proprietaireQueriesBaseUrl + 'allProprietaires', httpOptions);
  }

  public getProprietaireById(id:string):any {
    return this.http.get(environment.proprietaireQueriesBaseUrl + 'proprietaireById/'+id, httpOptions);
  }

  public getVehicules():any {
    return this.http.get(environment.vehiculeQueriesBaseUrl + 'allVehicules', httpOptions);
  }

  public getVehiculeById(id:string):any {
    return this.http.get(environment.vehiculeQueriesBaseUrl + 'getVehicule/'+id, httpOptions);
  }
}
