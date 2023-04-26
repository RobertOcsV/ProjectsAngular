import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceComponent } from './interface/interface.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    InterfaceComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class AdministracaoModule { }
