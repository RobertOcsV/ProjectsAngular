import { AdministracaoModule } from './administracao/administracao.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { MenubarModule } from 'primeng/menubar';

import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    BrowserAnimationsModule,
    AdministracaoModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    MenubarModule,
    ColorPickerModule

  ],
  providers: [CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
