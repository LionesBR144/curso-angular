import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  close() {
    this.sidenav.close();
  }

  open() {
    this.sidenav.open();
  }

  toggle() {
    this.sidenav.toggle();
  }
}
