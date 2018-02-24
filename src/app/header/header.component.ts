import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  routeTo(path: string, fragment?: string) {
    let navigationExtras: NavigationExtras;

    if (fragment) {
      navigationExtras = {
        fragment,
        preserveFragment: true
      };
    }

    this.router.navigate(["/main"], navigationExtras);
  }
}
