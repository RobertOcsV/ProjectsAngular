import { NavegacaoModule } from './navegacao/navegacao.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgBrazil } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation'
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';

import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent
  ],
  imports: [
    NavegacaoModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
   AppRoutingModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
