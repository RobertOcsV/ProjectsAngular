import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ],
  bootstrap: [
    MenuComponent
  ]
})
export class NavegacaoModule { }
