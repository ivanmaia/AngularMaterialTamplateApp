import { Component, OnInit, ViewChild} from '@angular/core';
import { MatMenu } from '@angular/material';

@Component({
  selector: 'app-configuration-menu',
  templateUrl: './configuration-menu.component.html'
})
export class ConfigurationMenuComponent implements OnInit {

  protected static readonly menuName: string = 'TheMenu';

  @ViewChild(ConfigurationMenuComponent.menuName) public TheMenu: MatMenu;

  constructor() { }

  ngOnInit() {  }

  ngAfterInit() {
    console.log(this.TheMenu);
  }

}
