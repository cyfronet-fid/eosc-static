import { Routes } from '@angular/router';
import { EoscClosureComponent } from './eosc-closure/eosc-closure.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/eosc-message' },
  { path: 'eosc-message', component: EoscClosureComponent },
  { path: '**', redirectTo: '/eosc-message' }
];
