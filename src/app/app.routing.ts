import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: 'search', pathMatch: 'full', component: SearchComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

