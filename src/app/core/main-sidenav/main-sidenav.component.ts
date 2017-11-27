import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatExpansionPanel } from '@angular/material';
import { MainMenuItemsService} from './main-menu-items.service';
import { MainMenuItem } from './main-menu-item';



@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html'
})
export class MainSidenavComponent implements OnInit {

  protected static readonly sideNavName: string = 'TheSideNav';

  @ViewChild(MainSidenavComponent.sideNavName) public TheSideNav: MatSidenav;

  navItems: Array<MainMenuItem>;

  constructor(public mainMenuItemsService: MainMenuItemsService) { }

  ngOnInit() {
    this.navItems = this.mainMenuItemsService.GetMainMenuItems();
  }
  ngAfterInit() {
    console.log(this.TheSideNav);
  }

}
