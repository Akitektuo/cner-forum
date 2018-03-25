
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { MapComponent } from './map/map.component';

export const router: Routes = [
  {path: "", redirectTo: "forum", pathMatch: "full"},
  {path: "forum", component: ForumComponent},
  {path: "map", component: MapComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
