import { Component, OnInit } from '@angular/core';
import { AppMainToolbar } from './core/app-main-toolbar/app-main-toolbar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  toolbar = new AppMainToolbar('Teste');
  title = 'app';

  ngOnInit() {
    console.log(this.toolbar.AppName);
  }
}
