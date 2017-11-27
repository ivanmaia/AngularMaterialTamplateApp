import { TestBed, inject } from '@angular/core/testing';

import { MainMenuItemsService } from './main-menu-items.service';

describe('MainMenuItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainMenuItemsService]
    });
  });

  it('should be created', inject([MainMenuItemsService], (service: MainMenuItemsService) => {
    expect(service).toBeTruthy();
  }));
});
