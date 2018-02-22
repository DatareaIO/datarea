import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgMaterialModule } from "./ng-material/ng-material.module";
import { NgRoutingModule } from "./ng-routing/ng-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainPageComponent } from "./main-page/main-page.component";

import "leaflet";

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainPageComponent],
  imports: [BrowserModule, FlexLayoutModule, NgMaterialModule, NgRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
