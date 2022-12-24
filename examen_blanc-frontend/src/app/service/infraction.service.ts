import { Injectable } from '@angular/core';
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


export class InfractionService {

  constructor(private http: HttpClient) {
  }

  public getInfractions():any {
    return this.http.get(environment.infractionQueriesBaseUrl + 'getAllInfractions', httpOptions);
  }

  public getInfractionById(id:string):any {
    return this.http.get(environment.infractionQueriesBaseUrl + 'getInfractionById/'+id, httpOptions);
  }
}
