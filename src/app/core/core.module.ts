import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { AppMainToolbarComponent } from './app-main-toolbar/app-main-toolbar.component';

@NgModule({
    declarations: [AppMainToolbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, AppMainToolbarComponent]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
