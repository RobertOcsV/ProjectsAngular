import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './navegacao/home/home.component';


const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},

];


@NgModule({
  imports:[
      RouterModule.forRoot(rootRouterConfig, {enableTracing: false})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
