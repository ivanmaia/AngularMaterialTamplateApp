import { Component, OnInit, Input } from '@angular/core';
import { MatMenu, MatSidenav } from '@angular/material';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html'
})
export class MainToolbarComponent implements OnInit {

  @Input() AppLogo: string;
  @Input() AppName: string;
  @Input() ConfigMenu: MatMenu;
  @Input() SideNavigator: MatSidenav;

  private navigatorIsOpened: boolean;

  constructor() {
    this.navigatorIsOpened = false;
  }

  ngOnInit() {
  }

  toggleNavigator(){
    console.log(this.SideNavigator);
    this.SideNavigator.toggle();
  }

}
