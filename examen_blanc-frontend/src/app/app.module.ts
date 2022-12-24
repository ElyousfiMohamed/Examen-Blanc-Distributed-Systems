import { AppRoutingModule } from './app-routing.module';
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";
import {RatingModule} from "primeng/rating";
import {SplitterModule} from "primeng/splitter";
import {BrowserModule} from "@angular/platform-browser";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {ContainerComponent} from "./component/container/container.component";
import {NgModule} from "@angular/core";
import { NavbarComponent } from './component/navbar/navbar.component';
import { PanelComponent } from './component/panel/panel.component';
import { RadarComponent } from './component/radar/radar.component';
import {CardModule} from "primeng/card";
import { ProprietaireComponent } from './component/proprietaire/proprietaire.component';
import { VehiculeComponent } from './component/vehicule/vehicule.component';
import { InfractionComponent } from './component/infraction/infraction.component';

@NgModule({
  declarations: [
    ContainerComponent,
    NavbarComponent,
    PanelComponent,
    RadarComponent,
    ProprietaireComponent,
    VehiculeComponent,
    InfractionComponent
  ],
  imports: [
    BrowserModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    AppRoutingModule,
    FieldsetModule,
    PanelModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    RatingModule,
    SplitterModule,
    CardModule

  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
