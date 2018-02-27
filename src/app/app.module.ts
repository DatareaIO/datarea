import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgMaterialModule } from "./ng-material/ng-material.module";
import { NgRoutingModule } from "./ng-routing/ng-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { SearchPageComponent } from "./search-page/search-page.component";

import { DatasetService } from "./dataset.service";

import "leaflet";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NgMaterialModule,
    NgRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, DatasetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
