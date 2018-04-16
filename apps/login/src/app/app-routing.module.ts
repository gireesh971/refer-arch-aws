import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'success', component: LoginsuccessComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
