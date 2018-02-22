import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule
} from "@angular/material";

const modules = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class NgMaterialModule {}
