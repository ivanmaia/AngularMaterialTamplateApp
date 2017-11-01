import { Component, OnInit, Input } from '@angular/core';
import { AppMainToolbar } from './app-main-toolbar.model';

@Component({
  selector: 'app-app-main-toolbar',
  templateUrl: './app-main-toolbar.component.html',
  styleUrls: ['./app-main-toolbar.component.css']
})
export class AppMainToolbarComponent implements OnInit {

  @Input() appMainToobar: AppMainToolbar;

  constructor() { }

  ngOnInit() {
  }

}
