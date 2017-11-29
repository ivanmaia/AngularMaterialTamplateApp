import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigurationMenuComponent} from './core/configuration-menu/configuration-menu.component';
import { MainSidenavComponent } from './core/main-sidenav/main-sidenav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = ''; //..Application Name';
  logoSrc = 'assets/img/AppLogo.png';

  ngOnInit() { }
}
