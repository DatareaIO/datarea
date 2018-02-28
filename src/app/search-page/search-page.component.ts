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
  status: string;
  datasets: Array<any>;

  constructor(
    private dataset: DatasetService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.status = "search";
    this.keywords = "";
    this.datasets = null;
  }

  ngOnInit() {
    this.activatedRouter.queryParams
      .switchMap((params: Params) => {
        this.keywords = params.q;
        return this.dataset.search(params.q);
      })
      .subscribe(
        result => {
          this.datasets = result;
          this.status = "success";
          console.log(result);
        },
        error => {
          console.log(error);
          this.status = "error";
        }
      );
  }
}
