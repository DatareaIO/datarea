import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  template: require('./about.component.html'),
  styles: [
    require('../../styles/main.less'),
    require('./about.component.less')
  ],
})
export default class AboutPageComponent {
}