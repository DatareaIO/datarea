import { Component, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    /**
     * The pure CSS solution doesn"t seem to work and it has to be done in TS.
     */

    const placeholder = document.getElementsByClassName(
      "mat-input-placeholder"
    )[0] as HTMLElement;
    placeholder.style.color = "white";
    placeholder.style.textAlign = "center";

    const underline = document.getElementsByClassName(
      "mat-input-ripple"
    )[0] as HTMLElement;
    underline.style.visibility = "visible";
    underline.style.backgroundColor = "white";
  }
}
