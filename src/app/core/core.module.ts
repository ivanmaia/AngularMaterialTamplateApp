import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatCardModule, MatSidenavModule, MatExpansionModule} from '@angular/material';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { ConfigurationMenuComponent } from './configuration-menu/configuration-menu.component';
import { MainSidenavComponent } from './main-sidenav/main-sidenav.component';
import { MainMenuItemsService } from './main-sidenav/main-menu-items.service';

@NgModule({
    declarations: [
      MainToolbarComponent,
      ConfigurationMenuComponent,
      MainSidenavComponent,
    ],
    imports: [
      CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MatButtonModule,
      MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule,
      MatSidenavModule, MatExpansionModule
    ],
    exports: [
      //Angular
      CommonModule, RouterModule, FormsModule, ReactiveFormsModule,
      //Material
      MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule,
      MatCardModule, MatSidenavModule, MatExpansionModule,
      //Application
      MainToolbarComponent, ConfigurationMenuComponent, MainSidenavComponent
    ],
    providers: [
      MainMenuItemsService
    ],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
