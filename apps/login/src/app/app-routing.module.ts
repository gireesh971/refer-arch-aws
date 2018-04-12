import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  exports: [
  	RouterModule
  ],
  imports: [
  	RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
