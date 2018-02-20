import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgMaterialModule } from "./ng-material/ng-material.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";

import "leaflet";

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent],
  imports: [BrowserModule, NgMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
