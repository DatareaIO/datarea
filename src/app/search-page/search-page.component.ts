import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { DatasetService } from "../dataset.service";

import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.scss"]
})
export class SearchPageComponent implements OnInit {
  keywords: string;
  currentKeywords: string;
  datasets: Array<any>;
  searching: boolean;

  constructor(
    private dataset: DatasetService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.keywords = "";
    this.currentKeywords = this.keywords;
    this.datasets = null;
    this.searching = false;
  }

  ngOnInit() {
    this.searching = true;

    this.activatedRouter.queryParams
      .switchMap((params: Params) => {
        this.keywords = params.q;
        this.currentKeywords = params.q;

        return this.dataset.search(params.q);
      })
      .subscribe(
        result => {
          this.datasets = result;
          this.searching = false;
        },
        error => {
          this.searching = false;
        }
      );
  }
}
