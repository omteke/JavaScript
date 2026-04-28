import { Routes } from '@angular/router';
import { Studentlist } from '../studentlist/studentlist';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },

  { path: 'students', component: Studentlist }
];