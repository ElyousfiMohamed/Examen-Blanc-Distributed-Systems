import { Component, OnInit } from '@angular/core';
import {RadarService} from "../../service/radar.service";

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  radars:any = [];
  constructor(private radarService:RadarService) { }

  ngOnInit(): void {
    this.radarService.getRadars().subscribe((data:any) => {
      this.radars = data;
      console.log(data);
    });
  }

  modifyRadar() {
    
  }
}
