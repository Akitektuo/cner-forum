import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "National College \"Emil Racoviță\"";
  site = "http://ler.ubbcluj.ro/";
  width = 0;
  height = 0;

  constructor() {
    this.height = window.screen.height;
  }

  public goToSite(event) {
    window.open(this.site, "_blank");
  }

}
