import { Component, OnInit } from '@angular/core';
import {ImmatriculationService} from "../../service/immatriculation.service";

@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styleUrls: ['./proprietaire.component.css']
})
export class ProprietaireComponent implements OnInit {

  proprietaires:any = [];

  constructor(private immatriculationService:ImmatriculationService) { }

  ngOnInit(): void {
    this.immatriculationService.getProprietaires().subscribe((data:any) => {
      this.proprietaires = data;
      console.log(data);
    });
  }

}
