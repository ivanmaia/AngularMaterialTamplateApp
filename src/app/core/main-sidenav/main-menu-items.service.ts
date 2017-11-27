import { Injectable } from '@angular/core';
import { MainMenuItem } from './main-menu-item';

@Injectable()
export class MainMenuItemsService {

  constructor() { }

  public GetMainMenuItems(): Array<MainMenuItem> {
    let items = new Array<MainMenuItem>(10);

    for (let i = 0; i<10; i++){
      items[i] = new MainMenuItem(''+i, `Menu Item ${i}`, 'Route_'+i);
    }

    return items;
  }

}
