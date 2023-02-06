import { NavegacaoModule } from './navegacao/navegacao.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { NgBrazil } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation'
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';

import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';






@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent
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
    AuthGuard,
    CadastroGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
