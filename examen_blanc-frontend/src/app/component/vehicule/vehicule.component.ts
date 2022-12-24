import { Component, OnInit } from '@angular/core';
import {ImmatriculationService} from "../../service/immatriculation.service";

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {

  vehicules:any = [];

  constructor(private immatriculationService:ImmatriculationService) { }

  ngOnInit(): void {
    this.immatriculationService.getVehicules().subscribe((data:any) => {
      this.vehicules = data;
      console.log(data);
    });
  }

}
