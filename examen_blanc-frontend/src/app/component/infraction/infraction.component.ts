import { Component, OnInit } from '@angular/core';
import {ImmatriculationService} from "../../service/immatriculation.service";
import {InfractionService} from "../../service/infraction.service";
import {Infraction} from "../../Model/infraction";
import {Vehicule} from "../../Model/vehicule";
import {RadarService} from "../../service/radar.service";

@Component({
  selector: 'app-infraction',
  templateUrl: './infraction.component.html',
  styleUrls: ['./infraction.component.css']
})
export class InfractionComponent implements OnInit {

  infractions:Infraction[] = [];

  constructor(private infractionService:InfractionService,
              private immatriculationService:ImmatriculationService,
              private radarService:RadarService) { }

  ngOnInit(): void {
    this.infractionService.getInfractions().subscribe((data:any) => {
      this.infractions = data;
      data.forEach((infraction:Infraction) => {
        this.immatriculationService.getVehiculeById(infraction.vehiculeId).subscribe((vehicule:Vehicule) => {
          infraction.vehicule = vehicule;
        });
        this.radarService.getRadarById(infraction.radarId).subscribe((radar:any) => {
          infraction.radar = radar;
        });
      });
      console.log(this.infractions);
    });
  }
}
