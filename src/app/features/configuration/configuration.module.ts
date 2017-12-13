import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';

const Routes: Routes = [
  { path: '', component: ConfigurationComponent}
];

@NgModule({
  declarations: [ConfigurationComponent],
  imports: [RouterModule.forChild(Routes)]
})
export class ConfigurationModule{}
