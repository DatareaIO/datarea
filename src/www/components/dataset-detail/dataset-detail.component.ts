import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MdSnackBar } from '@angular/material';
import * as marked from 'marked';

import 'rxjs/add/operator/switchMap';

import { DatasetService } from '../../services/dataset.service';

@Component({
  selector: 'dataset-detail',
  template: require('./dataset-detail.component.html'),
  styles: [
    require('../../styles/main.less'),
    require('./dataset-detail.component.less')
  ],
})
export default class DatasetDetailComponent implements OnInit {

  private dataset: any;
  private loading: boolean;
  private hide: any;

  constructor(
    private datasetService: DatasetService,
    private snackBar: MdSnackBar,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.dataset = null;
    this.loading = true;
    this.hide = {};
  }

  ngOnInit() {
    this.hide = {};

    this.route.params
      .switchMap((params: Params) => this.datasetService.get(+params['id']))
      .subscribe((result) => {

        // in case the description is in markdown format
        if (result.description) {
          result.description = marked(result.description);
        }

        for (let data of result.data) {
          if (data.description) {
            data.description = marked(data.description);
          }
        }

        this.dataset = result;
        this.loading = false;
      }, (error) => {
        console.log(error);
      }, () => {
        this.loading = false;
      });
  }

  goBack() {
    this.location.back();
  }

  openData(link) {
    window.open(link, '_blank');
  }

  openSnackBar(message) {
    this.snackBar.open(message, null, {
      duration: 2000
    });
  }
}